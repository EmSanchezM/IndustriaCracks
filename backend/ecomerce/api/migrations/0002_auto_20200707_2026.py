# Generated by Django 3.0.8 on 2020-07-08 02:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='puntuation',
            name='follow_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
