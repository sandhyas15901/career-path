#!/usr/bin/env bash
# exit on error
set -o errexit

python manage.py collectstatic --no-input
python manage.py migrate

exec gunicorn backend.wsgi:application --bind 0.0.0.0:8000
