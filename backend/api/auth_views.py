from datetime import timedelta

from rest_framework import generics, permissions, status, throttling
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken, OutstandingToken
from django.contrib.auth.models import User
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.conf import settings
from django.utils import timezone
from django.db import transaction
from django.contrib.auth.models import update_last_login

from .serializers import (
    RegisterSerializer, LoginSerializer, UserSerializer,
    PasswordResetRequestSerializer, PasswordResetConfirmSerializer,
    VerifyEmailSerializer, ResendVerificationSerializer, UserSessionSerializer
)
from .models import UserSession

token_generator = PasswordResetTokenGenerator()
REFRESH_COOKIE_NAME = 'career_refresh_token'
SESSION_COOKIE_NAME = 'career_session_id'


def _get_client_ip(request):
    forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if forwarded_for:
        return forwarded_for.split(',')[0].strip()
    return request.META.get('REMOTE_ADDR')


def _get_refresh_lifetime(remember_me):
    return timedelta(days=30 if remember_me else 1)


def _build_auth_response(request, user, remember_me):
    refresh = RefreshToken.for_user(user)
    refresh.set_exp(lifetime=_get_refresh_lifetime(remember_me))
    access = refresh.access_token

    expires_at = timezone.now() + _get_refresh_lifetime(remember_me)
    session = UserSession.objects.create(
        user=user,
        refresh_jti=str(refresh['jti']),
        user_agent=request.META.get('HTTP_USER_AGENT', '')[:512],
        ip_address=_get_client_ip(request),
        remember_me=remember_me,
        expires_at=expires_at,
    )

    response = Response({
        'message': 'Login successful',
        'user': UserSerializer(user).data,
        'tokens': {
            'access': str(access),
            'access_expires_in': int(access.lifetime.total_seconds()),
        },
        'session': UserSessionSerializer(session, context={'current_session_id': session.id}).data,
    })

    secure = not settings.DEBUG
    max_age = int(_get_refresh_lifetime(remember_me).total_seconds()) if remember_me else None

    response.set_cookie(
        REFRESH_COOKIE_NAME,
        str(refresh),
        httponly=True,
        secure=secure,
        samesite='Lax',
        max_age=max_age,
        path='/api/auth/',
    )
    response.set_cookie(
        SESSION_COOKIE_NAME,
        str(session.id),
        httponly=False,
        secure=secure,
        samesite='Lax',
        max_age=max_age,
        path='/',
    )
    return response


def _clear_auth_cookies(response):
    response.delete_cookie(REFRESH_COOKIE_NAME, path='/api/auth/', samesite='Lax')
    response.delete_cookie(SESSION_COOKIE_NAME, path='/')


class LoginRateThrottle(throttling.AnonRateThrottle):
    scope = 'login'


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]
    throttle_classes = [throttling.AnonRateThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        # Generate email verification token
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        verify_token = token_generator.make_token(user)

        return Response({
            'message': 'Account created successfully. Please verify your email.',
            'user': UserSerializer(user).data,
            'uid': uid,
            'verification_token': verify_token if settings.DEBUG else None,
            'note': 'In production, the verification token is sent via email. It is shown here only in DEBUG mode.'
        }, status=status.HTTP_201_CREATED)


class VerifyEmailView(APIView):
    permission_classes = [permissions.AllowAny]
    throttle_classes = [throttling.AnonRateThrottle]

    def post(self, request):
        serializer = VerifyEmailSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        uidb64 = serializer.validated_data['uid']
        token = serializer.validated_data['token']

        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response(
                {'detail': 'Invalid verification link.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if not token_generator.check_token(user, token):
            return Response(
                {'detail': 'Invalid or expired verification token.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        profile = getattr(user, 'profile', None)
        if profile:
            profile.is_email_verified = True
            profile.profile_status = 'active'
            profile.save(update_fields=['is_email_verified', 'profile_status', 'updated_at'])

        return Response(
            {'message': 'Email verified successfully. You can now log in.'},
            status=status.HTTP_200_OK
        )


class ResendVerificationView(APIView):
    permission_classes = [permissions.AllowAny]
    throttle_classes = [throttling.AnonRateThrottle]

    def post(self, request):
        serializer = ResendVerificationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        user = User.objects.filter(email__iexact=serializer.validated_data['email']).first()
        if not user:
            return Response(
                {'detail': 'No account found with this email address.'},
                status=status.HTTP_404_NOT_FOUND
            )

        profile = getattr(user, 'profile', None)
        if profile and profile.is_email_verified:
            return Response(
                {'message': 'Email is already verified. You can log in now.'},
                status=status.HTTP_200_OK
            )

        uid = urlsafe_base64_encode(force_bytes(user.pk))
        token = token_generator.make_token(user)
        payload = {
            'message': 'Verification instructions sent.',
            'uid': uid,
        }
        if settings.DEBUG:
            payload['verification_token'] = token
            payload['note'] = 'Token is returned only in DEBUG mode for testing.'

        return Response(payload, status=status.HTTP_200_OK)


class LoginView(APIView):
    permission_classes = [permissions.AllowAny]
    throttle_classes = [LoginRateThrottle]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        identifier = serializer.validated_data['identifier']
        password = serializer.validated_data['password']
        remember_me = serializer.validated_data['remember_me']

        # Try email first, then username (case-insensitive)
        user = User.objects.filter(email__iexact=identifier).first()
        if not user:
            user = User.objects.filter(username__iexact=identifier).first()

        if not user or not user.check_password(password):
            return Response(
                {'detail': 'Invalid credentials. Please check your email/username and password.'},
                status=status.HTTP_401_UNAUTHORIZED
            )

        profile = getattr(user, 'profile', None)
        if profile and not profile.is_email_verified:
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            payload = {
                'detail': 'Please verify your email address before signing in.',
                'requires_verification': True,
                'uid': uid,
            }
            if settings.DEBUG:
                payload['verification_token'] = token_generator.make_token(user)
            return Response(payload, status=status.HTTP_403_FORBIDDEN)

        if profile:
            profile.last_login_at = timezone.now()
            if profile.profile_status == 'pending':
                profile.profile_status = 'active'
            profile.save(update_fields=['last_login_at', 'profile_status', 'updated_at'])

        update_last_login(None, user)
        return _build_auth_response(request, user, remember_me)


class LogoutView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get('refresh') or request.COOKIES.get(REFRESH_COOKIE_NAME)
            if refresh_token:
                token = RefreshToken(refresh_token)
                UserSession.objects.filter(refresh_jti=str(token['jti'])).update(is_active=False)
                token.blacklist()
            response = Response(
                {'message': 'Logout successful'},
                status=status.HTTP_200_OK
            )
            _clear_auth_cookies(response)
            return response
        except Exception as e:
            return Response(
                {'detail': str(e)},
                status=status.HTTP_400_BAD_REQUEST
            )


class MeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        session_id = request.COOKIES.get(SESSION_COOKIE_NAME)
        if session_id:
            UserSession.objects.filter(id=session_id, user=request.user, is_active=True).update(last_seen_at=timezone.now())
        return Response({
            'user': UserSerializer(request.user).data
        })


class RefreshTokenView(APIView):
    permission_classes = [permissions.AllowAny]
    throttle_classes = [throttling.AnonRateThrottle]

    def post(self, request):
        refresh_token = request.data.get('refresh') or request.COOKIES.get(REFRESH_COOKIE_NAME)
        if not refresh_token:
            return Response({'detail': 'Refresh token not provided.'}, status=status.HTTP_401_UNAUTHORIZED)

        try:
            old_refresh = RefreshToken(refresh_token)
            session = UserSession.objects.select_related('user').filter(
                refresh_jti=str(old_refresh['jti']),
                is_active=True,
            ).first()
            if not session or session.expires_at <= timezone.now():
                return Response({'detail': 'Session expired. Please log in again.'}, status=status.HTTP_401_UNAUTHORIZED)

            old_refresh.blacklist()
            session.is_active = False
            session.save(update_fields=['is_active'])

            return _build_auth_response(request, session.user, session.remember_me)
        except Exception:
            return Response({'detail': 'Refresh token is invalid or expired.'}, status=status.HTTP_401_UNAUTHORIZED)


class SessionListView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        current_session_id = request.COOKIES.get(SESSION_COOKIE_NAME)
        sessions = UserSession.objects.filter(user=request.user, is_active=True)
        return Response({
            'sessions': UserSessionSerializer(
                sessions,
                many=True,
                context={'current_session_id': int(current_session_id) if current_session_id else None},
            ).data
        })


class SessionRevokeView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def delete(self, request, session_id):
        session = UserSession.objects.filter(id=session_id, user=request.user, is_active=True).first()
        if not session:
            return Response({'detail': 'Session not found.'}, status=status.HTTP_404_NOT_FOUND)

        outstanding = OutstandingToken.objects.filter(jti=session.refresh_jti).first()
        if outstanding:
            BlacklistedToken.objects.get_or_create(token=outstanding)

        session.is_active = False
        session.save(update_fields=['is_active'])
        return Response({'message': 'Session revoked successfully.'}, status=status.HTTP_200_OK)


class PasswordResetRequestView(APIView):
    permission_classes = [permissions.AllowAny]
    throttle_classes = [throttling.AnonRateThrottle]

    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        email = serializer.validated_data['email']
        user = User.objects.get(email__iexact=email)

        token = token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))

        response_data = {
            'message': 'Password reset instructions sent to your email.',
            'uid': uid,
        }
        if settings.DEBUG:
            response_data['debug_token'] = token
            response_data['note'] = 'Token is returned only in DEBUG mode for testing.'

        return Response(response_data, status=status.HTTP_200_OK)


class PasswordResetConfirmView(APIView):
    permission_classes = [permissions.AllowAny]
    throttle_classes = [throttling.AnonRateThrottle]

    def post(self, request):
        serializer = PasswordResetConfirmSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        uidb64 = request.data.get('uid')
        token = serializer.validated_data['token']

        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response(
                {'detail': 'Invalid reset link.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if not token_generator.check_token(user, token):
            return Response(
                {'detail': 'Invalid or expired reset token.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        with transaction.atomic():
            user.set_password(serializer.validated_data['new_password'])
            user.save()

            # Blacklist all existing refresh tokens for this user
            for outstanding_token in OutstandingToken.objects.filter(user=user):
                BlacklistedToken.objects.get_or_create(token=outstanding_token)

            UserSession.objects.filter(user=user, is_active=True).update(is_active=False)

        return Response(
            {'message': 'Password reset successful. Please log in with your new password.'},
            status=status.HTTP_200_OK
        )
