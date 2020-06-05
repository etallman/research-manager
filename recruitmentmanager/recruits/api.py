from recruits.models import Recruit
from rest_framework import viewsets, permissions
from .serializers import RecruitSerializer


class RecruitViewSet(viewsets.ModelViewSet):
  queryset = Recruit.objects.all()
  permission_classes = [
    permissions.IsAuthenticated
  ]

serializer_class = RecruitSerializer

def get_queryset(self):
  return self.request.user.recruits.all()

def perform_create(self, serializer):
  serializer.save(owner = self.request.user)