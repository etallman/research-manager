from rest_framework import serializers
from recruits.models import Recruit, Contact

class RecruitSerializer(serializers.ModelSerializer):
  class Meta:
    model = Recruit
    fields = '__all__'
    
# class CohortSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = Cohort
#     fields = '__all__'

class ContactSerializer(serializers.ModelSerializer):
  class Meta:
    model = Contact
    fields = '__all__'