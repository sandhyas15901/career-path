from django.db import migrations

from api.career_bank import CAREER_DASHBOARDS, CAREER_MAIN_STREAMS, CAREER_SUB_STREAMS


def seed_career_catalog(apps, schema_editor):
    MainStream = apps.get_model('api', 'MainStream')
    CareerDashboard = apps.get_model('api', 'CareerDashboard')
    SubStream = apps.get_model('api', 'SubStream')

    main_stream_map = {}
    for item in CAREER_MAIN_STREAMS:
        main_stream, _ = MainStream.objects.update_or_create(
            stream_key=item['stream_key'],
            defaults={
                'label': item['label'],
                'icon': item['icon'],
                'gradient': item['gradient'],
                'glow_class': item['glow_class'],
                'tagline': item['tagline'],
                'description': item['description'],
            },
        )
        main_stream_map[item['stream_key']] = main_stream

    for item in CAREER_DASHBOARDS:
        main_stream = main_stream_map[item['stream_key']]
        CareerDashboard.objects.update_or_create(
            main_stream=main_stream,
            defaults={
                'title': item['title'],
                'tagline': item['tagline'],
                'description': item['description'],
                'main_sections': item['main_sections'],
                'careers': item['careers'],
            },
        )

    substream_map = {}
    for item in CAREER_SUB_STREAMS:
        main_stream = main_stream_map[item['main_stream_key']]
        substream, _ = SubStream.objects.update_or_create(
            main_stream=main_stream,
            substream_key=item['substream_key'],
            defaults={
                'label': item['label'],
                'icon': item['icon'],
                'color': item['color'],
                'description': item['description'],
                'subjects': item['subjects'],
                'exams': item['exams'],
                'courses': item['courses'],
                'careers': item['careers'],
                'display_order': item['display_order'],
            },
        )
        substream_map[(item['main_stream_key'], item['substream_key'])] = substream

    for item in CAREER_SUB_STREAMS:
        if not item['parent_key']:
            continue
        substream = substream_map[(item['main_stream_key'], item['substream_key'])]
        parent = substream_map.get((item['main_stream_key'], item['parent_key']))
        if parent and substream.parent_id != parent.id:
            substream.parent = parent
            substream.save(update_fields=['parent'])


def unseed_career_catalog(apps, schema_editor):
    CareerDashboard = apps.get_model('api', 'CareerDashboard')
    SubStream = apps.get_model('api', 'SubStream')
    MainStream = apps.get_model('api', 'MainStream')
    CareerDashboard.objects.all().delete()
    SubStream.objects.all().delete()
    MainStream.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_careerdashboard_mainstream_substream'),
    ]

    operations = [
        migrations.RunPython(seed_career_catalog, unseed_career_catalog),
    ]
