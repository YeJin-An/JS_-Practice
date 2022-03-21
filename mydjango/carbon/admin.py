from django.contrib import admin
from carbon.models import Carbon

class CarbonAdmin(admin.ModelAdmin):
  list_display=('title','genre','year')

admin.site.register(Carbon, CarbonAdmin)