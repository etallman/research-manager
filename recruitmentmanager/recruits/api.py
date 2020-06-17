
from recruits.models import Recruit, Contact
from rest_framework import viewsets, permissions
from .serializers import RecruitSerializer, ContactSerializer


class RecruitViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticated
  ]

  serializer_class = RecruitSerializer

  def get_queryset(self):
    return self.request.user.recruits.all()

  def perform_create(self, serializer):
    serializer.save(owner = self.request.user)

    
class ContactViewSet(viewsets.ModelViewSet):
  permission_classes = [
    permissions.IsAuthenticated
  ]

  serializer_class = ContactSerializer

  def get_queryset(self):
    return self.request.user.recruits.all()

  def perform_create(self, serializer):
    serializer.save(owner = self.request.user)