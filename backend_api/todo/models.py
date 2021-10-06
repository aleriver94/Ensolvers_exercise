from django.db import models


class Folder(models.Model):
    name = models.CharField(max_length=50, blank=True)
    def __str__(self):
        return self.name

class Task(models.Model):
    title = models.CharField(max_length=100, null=True)
    completed = models.BooleanField(default=False)
    folder = models.ForeignKey(Folder, on_delete=models.CASCADE, related_name= 'tasks', null=True, blank=True)

    def __str__(self):
        return self.title

