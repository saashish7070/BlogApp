from django.db import models

class Post(models.Model):
    id = models.AutoField(primary_key=True)  # Add id field
    title = models.CharField(max_length=100)
    content = models.TextField()
    date = models.DateField(auto_now_add=True)  

    def __str__(self):
        return f"{self.title} | {self.author}"
