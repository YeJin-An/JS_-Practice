from django.db import models

class Carbon(models.Model):
  title = models.CharField(max_length=30)
  genre = models.CharField(max_length=15)
  year = models.IntegerField()