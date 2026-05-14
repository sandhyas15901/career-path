from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User
from django.utils.safestring import mark_safe

from .models import (
    AptitudeQuestion,
    AptitudeQuestionSubmission,
    CareerDashboard,
    InterestQuestion,
    InterestQuestionSubmission,
    MainStream,
    SubStream,
    UserProfile,
    Project,
    Task,
)


class UserProfileInline(admin.StackedInline):
    model = UserProfile
    can_delete = False
    extra = 0
    fields = (
        'mobile_number',
        'role',
        'profile_status',
        'is_email_verified',
        'country',
        'state',
        'city',
        'school_name',
        'state_board',
        'tenth_marks',
        'career_goal',
        'address',
    )


admin.site.unregister(User)


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    inlines = [UserProfileInline]
    list_display = (
        'username',
        'email',
        'first_name',
        'last_name',
        'get_mobile_number',
        'get_role',
        'get_profile_status',
        'date_joined',
    )
    list_filter = UserAdmin.list_filter + ('profile__role', 'profile__profile_status', 'profile__is_email_verified')
    search_fields = ('username', 'first_name', 'last_name', 'email', 'profile__mobile_number')

    def get_mobile_number(self, obj):
        return getattr(obj.profile, 'mobile_number', '')

    get_mobile_number.short_description = 'Mobile number'

    def get_role(self, obj):
        return getattr(obj.profile, 'role', '')

    get_role.short_description = 'Role'

    def get_profile_status(self, obj):
        return getattr(obj.profile, 'profile_status', '')

    get_profile_status.short_description = 'Profile status'


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = (
        'user',
        'full_name',
        'mobile_number',
        'role',
        'profile_status',
        'is_email_verified',
        'created_at',
    )
    list_filter = ('role', 'profile_status', 'is_email_verified', 'created_at')
    search_fields = ('user__username', 'user__email', 'user__first_name', 'user__last_name', 'mobile_number')
    readonly_fields = ('created_at', 'updated_at', 'last_login_at')


@admin.register(MainStream)
class MainStreamAdmin(admin.ModelAdmin):
    list_display = ('label', 'stream_key', 'tagline', 'sub_stream_count')
    search_fields = ('label', 'stream_key', 'tagline')
    ordering = ('label',)

    def sub_stream_count(self, obj):
        return obj.sub_streams.count()

    sub_stream_count.short_description = 'Sub streams'


@admin.register(CareerDashboard)
class CareerDashboardAdmin(admin.ModelAdmin):
    list_display = ('title', 'main_stream', 'main_section_count', 'career_count')
    search_fields = ('title', 'main_stream__label', 'tagline')
    readonly_fields = ('formatted_main_sections', 'formatted_careers')
    fields = ('main_stream', 'title', 'tagline', 'description', 'formatted_main_sections', 'formatted_careers')

    def main_section_count(self, obj):
        return len(obj.main_sections or [])

    main_section_count.short_description = 'Sections'

    def career_count(self, obj):
        return len(obj.careers or [])

    career_count.short_description = 'Careers'

    def formatted_main_sections(self, obj):
        if not obj.main_sections:
            return '-'
        return mark_safe('<br>'.join(f"{item.get('label', '')}: {item.get('count', 0)}" for item in obj.main_sections))

    formatted_main_sections.short_description = 'Main sections'

    def formatted_careers(self, obj):
        if not obj.careers:
            return '-'
        return mark_safe('<hr>'.join(
            '<br>'.join([
                career.get('title', ''),
                f"Salary: {career.get('salary', '-')}",
                f"Growth: {career.get('growth', '-')}",
            ])
            for career in obj.careers
        ))

    formatted_careers.short_description = 'Career roles'


@admin.register(SubStream)
class SubStreamAdmin(admin.ModelAdmin):
    list_display = ('label', 'main_stream', 'parent', 'substream_key', 'display_order')
    list_filter = ('main_stream',)
    search_fields = ('label', 'substream_key', 'main_stream__label', 'parent__label')
    readonly_fields = ('formatted_subjects', 'formatted_exams', 'formatted_courses', 'formatted_careers')
    fields = (
        'main_stream',
        'parent',
        'substream_key',
        'label',
        'icon',
        'color',
        'description',
        'formatted_subjects',
        'formatted_exams',
        'formatted_courses',
        'formatted_careers',
        'display_order',
    )

    def formatted_subjects(self, obj):
        return ', '.join(obj.subjects or []) or '-'

    formatted_subjects.short_description = 'Subjects'

    def formatted_exams(self, obj):
        return ', '.join(obj.exams or []) or '-'

    formatted_exams.short_description = 'Exams'

    def formatted_courses(self, obj):
        if not obj.courses:
            return '-'
        return mark_safe('<br>'.join(
            f"{course.get('name', '')} ({course.get('duration', '-')})" if course.get('duration') else course.get('name', '')
            for course in obj.courses
        ))

    formatted_courses.short_description = 'Courses'

    def formatted_careers(self, obj):
        if not obj.careers:
            return '-'
        return mark_safe('<br>'.join(career.get('title', '') for career in obj.careers))

    formatted_careers.short_description = 'Careers'


class BaseAssessmentSubmissionAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'user',
        'questions_preview',
        'recommended_stream',
        'top_streams_preview',
        'answer_count',
        'created_at',
    )
    list_filter = ('test_type', 'created_at')
    search_fields = ('user__username', 'user__email', 'recommended_stream')
    readonly_fields = ('created_at', 'formatted_top_streams', 'formatted_scores', 'formatted_answers')
    fields = (
        'user',
        'test_type',
        'recommended_stream',
        'formatted_top_streams',
        'formatted_scores',
        'formatted_answers',
        'created_at',
    )

    def top_streams_preview(self, obj):
        return ', '.join(obj.top_streams[:3]) if obj.top_streams else ''

    top_streams_preview.short_description = 'Top streams'

    def answer_count(self, obj):
        return len(obj.answers or [])

    answer_count.short_description = 'Answers'

    def questions_preview(self, obj):
        if not obj.answers:
            return '-'

        questions = []
        for answer in obj.answers[:2]:
            question = answer.get('question', '')
            if question:
                questions.append(question)

        preview = ' | '.join(questions)
        if len(obj.answers) > 2:
            preview = f'{preview} ...'
        return preview or '-'

    questions_preview.short_description = 'Questions'

    def formatted_top_streams(self, obj):
        return ', '.join(obj.top_streams or [])

    formatted_top_streams.short_description = 'Top streams'

    def formatted_scores(self, obj):
        if not obj.scores:
            return '-'
        return mark_safe('<br>'.join(f'{key}: {value}' for key, value in obj.scores.items()))

    formatted_scores.short_description = 'Scores'

    def formatted_answers(self, obj):
        if not obj.answers:
            return '-'

        lines = []
        for index, answer in enumerate(obj.answers, start=1):
            question = answer.get('question', '')
            selected = answer.get('selected_option_label', '')
            correct = answer.get('correct_option_label')
            stream_label = answer.get('stream_label')

            parts = [f'{index}. {question}', f'Chosen: {selected or "-"}']
            if stream_label:
                parts.append(f'Stream: {stream_label}')
            if correct is not None:
                parts.append(f'Correct: {correct}')
            lines.append('<br>'.join(parts))

        return mark_safe('<hr>'.join(lines))

    formatted_answers.short_description = 'Questions and answers'


@admin.register(InterestQuestion)
class InterestQuestionAdmin(admin.ModelAdmin):
    list_display = ('question_id', 'display_order', 'question', 'options_count')
    search_fields = ('question',)
    ordering = ('display_order', 'question_id')

    def options_count(self, obj):
        return len(obj.options or [])

    options_count.short_description = 'Options'


@admin.register(AptitudeQuestion)
class AptitudeQuestionAdmin(admin.ModelAdmin):
    list_display = ('stream_key', 'question_id', 'display_order', 'question', 'correct_option_index')
    list_filter = ('stream_key',)
    search_fields = ('question', 'stream_key')
    ordering = ('stream_key', 'display_order', 'question_id')


@admin.register(InterestQuestionSubmission)
class InterestQuestionSubmissionAdmin(BaseAssessmentSubmissionAdmin):
    def get_queryset(self, request):
        return super().get_queryset(request).filter(test_type='interest')


@admin.register(AptitudeQuestionSubmission)
class AptitudeQuestionSubmissionAdmin(BaseAssessmentSubmissionAdmin):
    def get_queryset(self, request):
        return super().get_queryset(request).filter(test_type='aptitude')


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'owner', 'is_active', 'created_at', 'updated_at']
    list_filter = ['is_active', 'created_at', 'owner']
    search_fields = ['title', 'description', 'owner__username']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['title', 'project', 'assignee', 'status', 'priority', 'created_at', 'due_date']
    list_filter = ['status', 'priority', 'created_at', 'due_date', 'project']
    search_fields = ['title', 'description', 'project__title', 'assignee__username']
    readonly_fields = ['created_at', 'updated_at']
    date_hierarchy = 'created_at'
