from django.db import models


class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    instructor = models.CharField(max_length=100, blank=True)
    rating = models.DecimalField(max_digits=5, decimal_places=1, default='5.0')
    price = models.DecimalField(max_digits=10, decimal_places=2, default='0.00')
    paid =models.BooleanField(default=True)
    level = models.CharField(max_length=20, choices=[
        ('Beginner', 'Beginner'),
        ('Intermediate', 'Intermediate'),
        ('Advanced', 'Advanced'),
    ], default='Beginner')
    duration = models.CharField(max_length=50,null=True)
    thumbnail = models.ImageField(upload_to='thumbnail/', blank=True)

    def __str__(self):
        return self.title


