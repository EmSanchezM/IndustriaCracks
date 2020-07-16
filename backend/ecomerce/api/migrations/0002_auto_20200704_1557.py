# Generated by Django 3.0 on 2020-07-04 21:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='direction',
            name='location',
        ),
        migrations.RemoveField(
            model_name='direction',
            name='relative_location',
        ),
        migrations.AddField(
            model_name='direction',
            name='direction',
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
        migrations.AddField(
            model_name='direction',
            name='relative',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='relative_direction', to='api.Direction'),
        ),
        migrations.AlterField(
            model_name='action',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='category',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='complaints',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='currency',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='direction',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='followers',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='image',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='log',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='order',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='payment_data',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='payment_method',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='shipping_method',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='status',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.CreateModel(
            name='Account',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('email', models.EmailField(max_length=100, unique=True, verbose_name='Correo electrónico')),
                ('first_name', models.CharField(max_length=50, verbose_name='Nombre')),
                ('last_name', models.CharField(max_length=50, verbose_name='Apellido')),
                ('phone_number', models.CharField(max_length=20, verbose_name='Número de teléfono')),
                ('address', models.TextField(null=True, verbose_name='Dirección')),
                ('birth_date', models.DateField(verbose_name='Fecha de nacimiento')),
                ('date_joined', models.DateTimeField(auto_now_add=True, verbose_name='Fecha de registro')),
                ('last_login', models.DateTimeField(auto_now=True, verbose_name='Último acceso')),
                ('is_admin', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=True)),
                ('cover_img', models.ForeignKey(default='1', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cover_img', to='api.Image')),
                ('direction', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='api.Direction')),
                ('user_img', models.ForeignKey(default='1', null=True, on_delete=django.db.models.deletion.CASCADE, related_name='profile_img', to='api.Image')),
            ],
            options={
                'verbose_name': 'Cuenta',
                'verbose_name_plural': 'Cuentas',
            },
        ),
        migrations.AlterField(
            model_name='complaints',
            name='accuser_user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='accuser_user', to='api.Account'),
        ),
        migrations.AlterField(
            model_name='complaints',
            name='denounced_user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='denounced_user', to='api.Account'),
        ),
        migrations.AlterField(
            model_name='followers',
            name='followed_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='followed', to='api.Account'),
        ),
        migrations.AlterField(
            model_name='followers',
            name='follower_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='followers', to='api.Account'),
        ),
        migrations.AlterField(
            model_name='log',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_log', to='api.Account'),
        ),
        migrations.AlterField(
            model_name='payment_data',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_payment_data', to='api.Account'),
        ),
        migrations.AlterField(
            model_name='product',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_owner', to='api.Account'),
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]