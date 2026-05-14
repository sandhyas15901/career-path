from django.db import migrations

from api.question_bank import APTITUDE_QUESTION_BANK, INTEREST_QUESTION_BANK


def seed_question_banks(apps, schema_editor):
    InterestQuestion = apps.get_model('api', 'InterestQuestion')
    AptitudeQuestion = apps.get_model('api', 'AptitudeQuestion')

    for item in INTEREST_QUESTION_BANK:
        InterestQuestion.objects.update_or_create(
            question_id=item['question_id'],
            defaults={
                'display_order': item['display_order'],
                'emoji': item['emoji'],
                'question': item['question'],
                'options': item['options'],
            },
        )

    for item in APTITUDE_QUESTION_BANK:
        AptitudeQuestion.objects.update_or_create(
            stream_key=item['stream_key'],
            question_id=item['question_id'],
            defaults={
                'display_order': item['display_order'],
                'question': item['question'],
                'options': item['options'],
                'correct_option_index': item['correct_option_index'],
                'explanation': item['explanation'],
            },
        )


def unseed_question_banks(apps, schema_editor):
    InterestQuestion = apps.get_model('api', 'InterestQuestion')
    AptitudeQuestion = apps.get_model('api', 'AptitudeQuestion')
    InterestQuestion.objects.all().delete()
    AptitudeQuestion.objects.all().delete()


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_aptitudequestion_interestquestion_and_more'),
    ]

    operations = [
        migrations.RunPython(seed_question_banks, unseed_question_banks),
    ]
