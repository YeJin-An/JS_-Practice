from django.contrib import admin
from carbon.models import Carbon

class CarbonAdmin(admin.ModelAdmin):
  list_display=('title','author','created',)

admin.site.register(Carbon, CarbonAdmin)