# Generated by Django 3.2.6 on 2021-08-23 20:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=60)),
                ('last_name', models.CharField(max_length=60)),
                ('email', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=90)),
                ('picture', models.ImageField(upload_to='recipe_photo_album')),
                ('link_to_recipe', models.URLField()),
                ('description', models.TextField(blank=True)),
                ('meat_type', models.CharField(choices=[('RM', 'Red Meat'), ('PL', 'Poultry'), ('FI', 'Fish'), ('VG', 'Vegetarian')], default='RM', max_length=2)),
                ('category', models.CharField(choices=[('AM', 'American'), ('CH', 'Chinese'), ('EE', 'Eastern European'), ('EN', 'English'), ('FR', 'French'), ('GE', 'German'), ('GR', 'Greek'), ('IN', 'Indian'), ('IT', 'Italian'), ('JP', 'Japanese'), ('KR', 'Korean'), ('MX', 'Mexican'), ('OT', 'Other'), ('SL', 'Soul Food')], default='AM', max_length=2)),
                ('best_quantity', models.DecimalField(decimal_places=2, default=1, max_digits=3)),
                ('rating', models.DecimalField(decimal_places=2, max_digits=3, null=True)),
                ('comments', models.TextField(blank=True)),
                ('last_made_at', models.DateField()),
                ('quick_and_easy', models.BooleanField(default=False)),
                ('is_favorite', models.BooleanField(default=False)),
                ('have_made_before', models.BooleanField(default=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('saved_by', models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='saved_recipes', to='API.user')),
            ],
        ),
    ]
