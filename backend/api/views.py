from rest_framework import viewsets, permissions, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import AssessmentSubmission, UserProfile, Project, Task
from .serializers import (
    AssessmentSubmissionSerializer,
    UserSerializer,
    UserProfileSerializer,
    ProjectSerializer,
    TaskSerializer,
)
from .permissions import IsAdminOrSelf, IsAdminOrOwnProfile


@api_view(['GET'])
@permission_classes([permissions.AllowAny])
def api_health_check(request):
    """Health check endpoint to verify API is running"""
    return Response({
        'status': 'healthy',
        'message': 'Django API is running successfully',
        'version': '1.0.0'
    })


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return self.queryset
        return User.objects.filter(pk=self.request.user.pk)

    def get_permissions(self):
        if self.action in ['retrieve', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated(), IsAdminOrSelf()]
        return [permissions.IsAuthenticated()]


class UserProfileViewSet(viewsets.ModelViewSet):
    """
    API endpoint for user profiles.
    """
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return self.queryset
        return UserProfile.objects.filter(user=self.request.user)

    def get_permissions(self):
        if self.action in ['retrieve', 'update', 'partial_update', 'destroy']:
            return [permissions.IsAuthenticated(), IsAdminOrOwnProfile()]
        return [permissions.IsAuthenticated()]


class AssessmentSubmissionViewSet(viewsets.ModelViewSet):
    """
    Store completed interest and aptitude test submissions.
    """
    queryset = AssessmentSubmission.objects.all()
    serializer_class = AssessmentSubmissionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return self.queryset
        return AssessmentSubmission.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ProjectViewSet(viewsets.ModelViewSet):
    """
    API endpoint for projects.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Return projects owned by the current user"""
        return Project.objects.filter(owner=self.request.user)

    def perform_create(self, serializer):
        """Set the owner to the current user when creating a project"""
        serializer.save(owner=self.request.user)


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint for tasks.
    """
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Return tasks for projects owned by the current user"""
        return Task.objects.filter(project__owner=self.request.user)

    def perform_create(self, serializer):
        """Ensure task is created for a project owned by the current user"""
        project = serializer.validated_data['project']
        if project.owner != self.request.user:
            from rest_framework.exceptions import PermissionDenied
            raise PermissionDenied("You can only create tasks for your own projects")
        serializer.save()


@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def user_dashboard(request):
    """Get dashboard data for the current user"""
    user = request.user
    projects = Project.objects.filter(owner=user)
    tasks = Task.objects.filter(project__owner=user)
    
    # Calculate statistics
    total_projects = projects.count()
    active_projects = projects.filter(is_active=True).count()
    total_tasks = tasks.count()
    completed_tasks = tasks.filter(status='completed').count()
    pending_tasks = tasks.filter(status='pending').count()
    in_progress_tasks = tasks.filter(status='in_progress').count()
    
    return Response({
        'user': UserSerializer(user).data,
        'statistics': {
            'total_projects': total_projects,
            'active_projects': active_projects,
            'total_tasks': total_tasks,
            'completed_tasks': completed_tasks,
            'pending_tasks': pending_tasks,
            'in_progress_tasks': in_progress_tasks,
            'completion_rate': (completed_tasks / total_tasks * 100) if total_tasks > 0 else 0
        },
        'recent_projects': ProjectSerializer(projects.order_by('-created_at')[:5], many=True).data,
        'recent_tasks': TaskSerializer(tasks.order_by('-created_at')[:10], many=True).data
    })
