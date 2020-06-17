from django.db import models
from django.contrib.auth.models import User
from phone_field import PhoneField

class Recruit(models.Model):
  first_name = models.CharField(max_length=50)
  last_name = models.CharField(max_length=50)
  age = models.IntegerField
  email = models.EmailField(max_length=100, unique=True)
  phone_number = PhoneField(blank=True)
  referral_source = models.CharField(max_length=100)
  reason_interested = models.CharField(max_length=100)
  notes = models.CharField(max_length=300)
  owner = models.ForeignKey(User, related_name="recruits", on_delete=models.CASCADE, null=True)
  created_at = models.DateTimeField(auto_now_add=True)

class Cohort(models.Model):
  recruit = models.ForeignKey(Recruit, on_delete=models.CASCADE)
  CONTROL = 'CN'
  EXPERIMENTAL = 'EX'
  COHORT_CHOICES = [
    (CONTROL, 'Control Group'),
    (EXPERIMENTAL, 'Experimental Group'),
  ]
  cohort_group = models.CharField(
    max_length=2,
    choices=COHORT_CHOICES,
    default=CONTROL,
  )

  def is_upperclass(self):
    return self.cohort_group in {self.CONTROL, self.EXPERIMENTAL}

class Contact(models.Model):
  recruit = models.ForeignKey(Recruit, on_delete=models.CASCADE)
  first_contact_date = models.DateField(auto_now=False)
  first_contact_time = models.TimeField(auto_now=False)
  end_contact_date = models.DateField(auto_now=False)
  end_contact_time = models.TimeField(auto_now=False)
  current_date = models.DateField(auto_now=True)
  