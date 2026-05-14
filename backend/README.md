# Django Backend API

This is a Django REST API backend for the full-stack application.

## Features

- User authentication and management
- Project management
- Task tracking with status and priority
- User profiles
- RESTful API endpoints
- CORS enabled for frontend integration

## Setup Instructions

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)

### Installation

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   # Windows
   python -m venv venv
   venv\Scripts\activate
   
   # macOS/Linux
   python -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser (for admin access):**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the development server:**
   ```bash
   python manage.py runserver
   ```

The API will be available at `http://localhost:8000`

## API Endpoints

### Health Check
- `GET /api/health/` - API health check

### Authentication Required
- `GET /api/dashboard/` - User dashboard with statistics
- `GET/POST/PUT/DELETE /api/projects/` - Project management
- `GET/POST/PUT/DELETE /api/tasks/` - Task management
- `GET/POST/PUT/DELETE /api/user-profiles/` - User profiles
- `GET/POST/PUT/DELETE /api/users/` - User management

### Admin Panel
- `http://localhost:8000/admin/` - Django admin interface

## Frontend Integration

The backend is configured to accept requests from:
- `http://localhost:5173` (Vite default)
- `http://localhost:3000` (React default)

## Models

### User
- Standard Django User model

### UserProfile
- Extended user information (bio, location, birth_date)

### Project
- Project management with owner, title, description

### Task
- Task tracking with project, status, priority, assignee

## Development

### Adding New Models

1. Define models in `api/models.py`
2. Create serializers in `api/serializers.py`
3. Add viewsets in `api/views.py`
4. Register in `api/urls.py`
5. Run migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

### Testing

Run tests with:
```bash
python manage.py test
```
