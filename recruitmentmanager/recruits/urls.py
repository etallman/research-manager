from rest_framework import routers
from .api import RecruitViewSet

router = routers.DefaultRouter()
router.register('api/recruits', RecruitViewSet, 'recruits')

urlpatterns = router.urls