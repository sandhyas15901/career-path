from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    ROLE_CHOICES = [
        ('student', 'Student'),
        ('admin', 'Admin'),
        ('counselor', 'Counselor'),
    ]
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('pending', 'Pending'),
        ('suspended', 'Suspended'),
    ]

    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    mobile_number = models.CharField(max_length=15, blank=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='student')
    profile_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    is_email_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    last_login_at = models.DateTimeField(null=True, blank=True)
    
    # Student profile fields
    country = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    hobbies = models.TextField(blank=True)
    school_name = models.CharField(max_length=200, blank=True)
    state_board = models.CharField(max_length=200, blank=True)
    tenth_marks = models.CharField(max_length=10, blank=True)
    stream_interest = models.JSONField(default=list, blank=True)
    favorite_subjects = models.JSONField(default=list, blank=True)
    career_goal = models.TextField(blank=True)
    address = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username}'s profile"

    @property
    def full_name(self):
        return f"{self.user.first_name} {self.user.last_name}".strip() or self.user.username


class UserSession(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='auth_sessions')
    refresh_jti = models.CharField(max_length=255, unique=True)
    user_agent = models.CharField(max_length=512, blank=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    remember_me = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_seen_at = models.DateTimeField(auto_now=True)
    expires_at = models.DateTimeField()
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['-last_seen_at']
        indexes = [
            models.Index(fields=['user', 'is_active']),
            models.Index(fields=['expires_at']),
        ]

    def __str__(self):
        return f"{self.user.username} session {self.refresh_jti[:8]}"


class AssessmentSubmission(models.Model):
    TEST_TYPE_CHOICES = [
        ('interest', 'Interest Test'),
        ('aptitude', 'Aptitude Test'),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='assessment_submissions')
    test_type = models.CharField(max_length=20, choices=TEST_TYPE_CHOICES)
    answers = models.JSONField(default=list, blank=True)
    scores = models.JSONField(default=dict, blank=True)
    top_streams = models.JSONField(default=list, blank=True)
    recommended_stream = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['user', 'test_type']),
            models.Index(fields=['created_at']),
        ]

    def __str__(self):
        return f"{self.user.username} {self.test_type} submission"


class MainStream(models.Model):
    stream_key = models.CharField(max_length=100, unique=True)
    label = models.CharField(max_length=200)
    icon = models.CharField(max_length=50, blank=True)
    gradient = models.TextField(blank=True)
    glow_class = models.CharField(max_length=100, blank=True)
    tagline = models.TextField(blank=True)
    description = models.TextField(blank=True)

    class Meta:
        ordering = ['label']
        verbose_name = 'Main Streams'
        verbose_name_plural = 'Main Streams'

    def __str__(self):
        return self.label


class CareerDashboard(models.Model):
    main_stream = models.OneToOneField(MainStream, on_delete=models.CASCADE, related_name='dashboard')
    title = models.CharField(max_length=200)
    tagline = models.TextField(blank=True)
    description = models.TextField(blank=True)
    main_sections = models.JSONField(default=list, blank=True)
    careers = models.JSONField(default=list, blank=True)

    class Meta:
        ordering = ['title']
        verbose_name = 'Career Dashboards'
        verbose_name_plural = 'Career Dashboards'

    def __str__(self):
        return self.title


class SubStream(models.Model):
    main_stream = models.ForeignKey(MainStream, on_delete=models.CASCADE, related_name='sub_streams')
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE, related_name='children')
    substream_key = models.CharField(max_length=100)
    label = models.CharField(max_length=200)
    icon = models.CharField(max_length=50, blank=True)
    color = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    subjects = models.JSONField(default=list, blank=True)
    exams = models.JSONField(default=list, blank=True)
    courses = models.JSONField(default=list, blank=True)
    careers = models.JSONField(default=list, blank=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['main_stream__label', 'display_order', 'label']
        verbose_name = 'Sub Streams'
        verbose_name_plural = 'Sub Streams'
        constraints = [
            models.UniqueConstraint(fields=['main_stream', 'substream_key'], name='unique_substream_per_main_stream'),
        ]

    def __str__(self):
        return f'{self.main_stream.label} - {self.label}'


class InterestQuestion(models.Model):
    question_id = models.PositiveIntegerField(unique=True)
    display_order = models.PositiveIntegerField(default=0)
    emoji = models.CharField(max_length=50, blank=True)
    question = models.TextField()
    options = models.JSONField(default=list, blank=True)

    class Meta:
        ordering = ['display_order', 'question_id']
        verbose_name = 'Interest Questions'
        verbose_name_plural = 'Interest Questions'

    def __str__(self):
        return f'Interest Q{self.question_id}: {self.question[:60]}'


class AptitudeQuestion(models.Model):
    stream_key = models.CharField(max_length=100)
    question_id = models.PositiveIntegerField()
    display_order = models.PositiveIntegerField(default=0)
    question = models.TextField()
    options = models.JSONField(default=list, blank=True)
    correct_option_index = models.PositiveIntegerField(null=True, blank=True)
    explanation = models.TextField(blank=True)

    class Meta:
        ordering = ['stream_key', 'display_order', 'question_id']
        verbose_name = 'Aptitude Questions'
        verbose_name_plural = 'Aptitude Questions'
        constraints = [
            models.UniqueConstraint(fields=['stream_key', 'question_id'], name='unique_aptitude_question_per_stream'),
        ]

    def __str__(self):
        return f'{self.stream_key} Q{self.question_id}: {self.question[:60]}'


class InterestQuestionSubmission(AssessmentSubmission):
    class Meta:
        proxy = True
        verbose_name = 'Interest Question Submissions'
        verbose_name_plural = 'Interest Question Submissions'


class AptitudeQuestionSubmission(AssessmentSubmission):
    class Meta:
        proxy = True
        verbose_name = 'Aptitude Question Submissions'
        verbose_name_plural = 'Aptitude Question Submissions'


class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='projects')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Task(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
    ]

    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
    ]

    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='tasks')
    assignee = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='medium')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    due_date = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.title
