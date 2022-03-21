
from django.contrib import admin
from django.urls import path, include
from carbon.models import Carbon

urlpatterns = [
    path('admin/', admin.site.urls),
    path('carbon/', include('carbon.urls')),
    path('accounts/',include('accounts.urls')),
]
