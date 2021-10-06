from rest_framework import routers, urlpatterns
from .views import TaskViewset, FolderViewset

router = routers.DefaultRouter()
router.register('todo', TaskViewset)
router.register('folder', FolderViewset)