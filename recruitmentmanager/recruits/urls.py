from rest_framework import routers
from .api import RecruitViewSet, ContactViewSet

router = routers.DefaultRouter()
router.register('api/recruits', RecruitViewSet, 'recruits')
router.register('api/recruits', ContactViewSet, 'contact')
urlpatterns = router.urls