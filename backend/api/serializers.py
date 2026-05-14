from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from .models import AssessmentSubmission, UserProfile, UserSession, Project, Task


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = [
            'id', 'bio', 'location', 'birth_date', 'mobile_number',
            'role', 'profile_status', 'is_email_verified',
            'created_at', 'updated_at', 'last_login_at',
            'country', 'state', 'city', 'hobbies', 'school_name',
            'state_board', 'tenth_marks', 'stream_interest',
            'favorite_subjects', 'career_goal', 'address'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']


class UserSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(read_only=True)
    name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id', 'username', 'email', 'first_name', 'last_name', 'name',
            'date_joined', 'last_login', 'profile'
        ]
        read_only_fields = ['id', 'date_joined', 'last_login', 'profile']

    def get_name(self, obj):
        full_name = f"{obj.first_name} {obj.last_name}".strip()
        return full_name or obj.username


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)
    name = serializers.CharField(required=True, max_length=150)
    mobile_number = serializers.CharField(required=False, allow_blank=True, max_length=15)
    role = serializers.ChoiceField(choices=UserProfile.ROLE_CHOICES, required=False, default='student')

    class Meta:
        model = User
        fields = ['username', 'email', 'name', 'password', 'confirm_password', 'mobile_number', 'role']

    def validate_email(self, value):
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError('A user with this email already exists.')
        return value.strip().lower()

    def validate_username(self, value):
        username = value.strip()
        if User.objects.filter(username__iexact=username).exists():
            raise serializers.ValidationError('This username is already taken.')
        return username

    def validate(self, attrs):
        attrs['name'] = attrs['name'].strip()
        if not attrs['name']:
            raise serializers.ValidationError({'name': 'Name is required.'})

        if attrs['password'] != attrs.pop('confirm_password'):
            raise serializers.ValidationError({'confirm_password': 'Passwords do not match.'})
        return attrs

    def create(self, validated_data):
        name = validated_data.pop('name')
        mobile_number = validated_data.pop('mobile_number', '')
        role = validated_data.pop('role', 'student')

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'].lower(),
            password=validated_data['password'],
            first_name=name.split()[0] if name else '',
            last_name=' '.join(name.split()[1:]) if name and len(name.split()) > 1 else ''
        )

        profile, _ = UserProfile.objects.update_or_create(
            user=user,
            defaults={
                'mobile_number': mobile_number,
                'role': role,
                'profile_status': 'pending',
                'is_email_verified': False,
            }
        )
        # Keep the in-memory relation aligned with the saved profile so the
        # register response includes the latest profile fields immediately.
        user.profile = profile
        return user


class LoginSerializer(serializers.Serializer):
    identifier = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)
    remember_me = serializers.BooleanField(required=False, default=False)

    def validate_identifier(self, value):
        identifier = value.strip()
        if not identifier:
            raise serializers.ValidationError('Email or username is required.')
        return identifier


class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)

    def validate_email(self, value):
        if not User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError('No account found with this email address.')
        return value.strip().lower()


class PasswordResetConfirmSerializer(serializers.Serializer):
    token = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True, write_only=True, validators=[validate_password])
    confirm_password = serializers.CharField(required=True, write_only=True)

    def validate(self, attrs):
        if attrs['new_password'] != attrs['confirm_password']:
            raise serializers.ValidationError({'confirm_password': 'Passwords do not match.'})
        return attrs


class VerifyEmailSerializer(serializers.Serializer):
    uid = serializers.CharField(required=True)
    token = serializers.CharField(required=True)


class ResendVerificationSerializer(serializers.Serializer):
    email = serializers.EmailField(required=True)

    def validate_email(self, value):
        return value.strip().lower()


class UserSessionSerializer(serializers.ModelSerializer):
    current = serializers.SerializerMethodField()

    class Meta:
        model = UserSession
        fields = [
            'id', 'user_agent', 'ip_address', 'remember_me',
            'created_at', 'last_seen_at', 'expires_at', 'is_active', 'current'
        ]
        read_only_fields = fields

    def get_current(self, obj):
        current_session_id = self.context.get('current_session_id')
        return obj.id == current_session_id


class AssessmentSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AssessmentSubmission
        fields = [
            'id',
            'user',
            'test_type',
            'answers',
            'scores',
            'top_streams',
            'recommended_stream',
            'created_at',
        ]
        read_only_fields = ['id', 'user', 'created_at']


class ProjectSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    owner_id = serializers.IntegerField(write_only=True)
    tasks_count = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'owner', 'owner_id', 'created_at', 'updated_at', 'is_active', 'tasks_count']
        read_only_fields = ['id', 'created_at', 'updated_at', 'tasks_count']

    def get_tasks_count(self, obj):
        return obj.tasks.count()


class TaskSerializer(serializers.ModelSerializer):
    project = ProjectSerializer(read_only=True)
    project_id = serializers.IntegerField(write_only=True)
    assignee = UserSerializer(read_only=True)
    assignee_id = serializers.IntegerField(write_only=True, required=False, allow_null=True)

    class Meta:
        model = Task
        fields = [
            'id', 'title', 'description', 'project', 'project_id',
            'assignee', 'assignee_id', 'status', 'priority',
            'created_at', 'updated_at', 'due_date'
        ]
        read_only_fields = ['id', 'created_at', 'updated_at']
