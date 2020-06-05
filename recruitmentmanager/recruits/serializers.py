from rest_framework import serializers
from recruits.models import Recruit

class RecruitSerializer(serializers.ModelSerializer):
  class Meta:
    model = Recruit
    fields = '__all__'