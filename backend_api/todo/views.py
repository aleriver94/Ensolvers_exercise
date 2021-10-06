from rest_framework import serializers, viewsets
from .models import Task, Folder
from .serializers import TaskSerializer, FolderSerializer

class TaskViewset(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class FolderViewset(viewsets.ModelViewSet):
    queryset = Folder.objects.all()
    serializer_class = FolderSerializer
