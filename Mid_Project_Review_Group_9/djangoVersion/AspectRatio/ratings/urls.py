from django.contrib import admin
from django.urls import path
from AspectRatio import views
from ratings.views import ReviewViewSet
from rest_framework import routers
from django.conf.urls import include

router= routers.DefaultRouter()
router.register(r'details', ReviewViewSet)  #details is url


urlpatterns = [

    path('',include(router.urls))
    
]