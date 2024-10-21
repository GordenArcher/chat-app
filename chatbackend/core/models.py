from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Chat(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sent_message = models.TextField()
    send_image = models.ImageField(upload_to='images/', blank=True)
    sent_date = models.TimeField(auto_now_add=True, blank=True)