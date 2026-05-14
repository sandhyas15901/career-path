from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .auth_views import (
    RegisterView, LoginView, LogoutView, MeView,
    PasswordResetRequestView, PasswordResetConfirmView,
    VerifyEmailView, ResendVerificationView, RefreshTokenView,
    SessionListView, SessionRevokeView
)

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'user-profiles', views.UserProfileViewSet)
router.register(r'assessment-submissions', views.AssessmentSubmissionViewSet)
router.register(r'projects', views.ProjectViewSet)
router.register(r'tasks', views.TaskViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('', include(router.urls)),
    path('health/', views.api_health_check, name='api_health_check'),
    path('dashboard/', views.user_dashboard, name='user_dashboard'),
    # Auth endpoints
    path('auth/register/', RegisterView.as_view(), name='auth_register'),
    path('auth/verify-email/', VerifyEmailView.as_view(), name='auth_verify_email'),
    path('auth/resend-verification/', ResendVerificationView.as_view(), name='auth_resend_verification'),
    path('auth/login/', LoginView.as_view(), name='auth_login'),
    path('auth/logout/', LogoutView.as_view(), name='auth_logout'),
    path('auth/me/', MeView.as_view(), name='auth_me'),
    path('auth/refresh/', RefreshTokenView.as_view(), name='auth_refresh'),
    path('auth/sessions/', SessionListView.as_view(), name='auth_sessions'),
    path('auth/sessions/<int:session_id>/', SessionRevokeView.as_view(), name='auth_session_revoke'),
    path('auth/password-reset-request/', PasswordResetRequestView.as_view(), name='auth_password_reset_request'),
    path('auth/password-reset-confirm/', PasswordResetConfirmView.as_view(), name='auth_password_reset_confirm'),
]
