from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Post(models.Model):
    title = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField(default='Your default content here')
    date = models.DateField(default=timezone.now)

    class Meta:
        verbose_name_plural = "Posts"
        ordering = ['-date']

    def __str__(self):
        return f"{self.title} | {self.author}"
