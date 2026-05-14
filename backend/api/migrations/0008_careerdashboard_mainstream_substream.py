from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_seed_question_banks'),
    ]

    operations = [
        migrations.CreateModel(
            name='MainStream',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stream_key', models.CharField(max_length=100, unique=True)),
                ('label', models.CharField(max_length=200)),
                ('icon', models.CharField(blank=True, max_length=50)),
                ('gradient', models.TextField(blank=True)),
                ('glow_class', models.CharField(blank=True, max_length=100)),
                ('tagline', models.TextField(blank=True)),
                ('description', models.TextField(blank=True)),
            ],
            options={
                'verbose_name': 'Main Streams',
                'verbose_name_plural': 'Main Streams',
                'ordering': ['label'],
            },
        ),
        migrations.CreateModel(
            name='SubStream',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('substream_key', models.CharField(max_length=100)),
                ('label', models.CharField(max_length=200)),
                ('icon', models.CharField(blank=True, max_length=50)),
                ('color', models.CharField(blank=True, max_length=200)),
                ('description', models.TextField(blank=True)),
                ('subjects', models.JSONField(blank=True, default=list)),
                ('exams', models.JSONField(blank=True, default=list)),
                ('courses', models.JSONField(blank=True, default=list)),
                ('careers', models.JSONField(blank=True, default=list)),
                ('display_order', models.PositiveIntegerField(default=0)),
                ('main_stream', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sub_streams', to='api.mainstream')),
                ('parent', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='children', to='api.substream')),
            ],
            options={
                'verbose_name': 'Sub Streams',
                'verbose_name_plural': 'Sub Streams',
                'ordering': ['main_stream__label', 'display_order', 'label'],
            },
        ),
        migrations.CreateModel(
            name='CareerDashboard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('tagline', models.TextField(blank=True)),
                ('description', models.TextField(blank=True)),
                ('main_sections', models.JSONField(blank=True, default=list)),
                ('careers', models.JSONField(blank=True, default=list)),
                ('main_stream', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='dashboard', to='api.mainstream')),
            ],
            options={
                'verbose_name': 'Career Dashboards',
                'verbose_name_plural': 'Career Dashboards',
                'ordering': ['title'],
            },
        ),
        migrations.AddConstraint(
            model_name='substream',
            constraint=models.UniqueConstraint(fields=('main_stream', 'substream_key'), name='unique_substream_per_main_stream'),
        ),
    ]
