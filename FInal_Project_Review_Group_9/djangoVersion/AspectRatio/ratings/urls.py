from django.contrib import admin
from django.urls import path
from AspectRatio import views
from ratings.views import ReviewViewSet, ReviewView
from rest_framework import routers
from django.conf.urls import include

router= routers.DefaultRouter()
router.register(r'details', ReviewViewSet)  #details is url

urlpatterns = [

    path('',include(router.urls)),
    path('list', ReviewView.as_view()),
    #path('list', )
    #path('list', ReviewViewSet.as_view())
    
]