from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date = models.DateField(auto_now_add=True)  # Add this line

    def __str__(self):
        return f"{self.title} | {self.author}"

