from rest_framework import serializers
from .models import Carbon

class CarbonSerializer(serializers.ModelSerializer):
  class Meta:
    model = Carbon
    fields = ('id','title','genre','year')