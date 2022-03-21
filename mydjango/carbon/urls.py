from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('<str:pk>', views.CarbonDetail.as_view(), name='detail'),
    path(r'', views.CarbonList.as_view(), name='carbon')
]

