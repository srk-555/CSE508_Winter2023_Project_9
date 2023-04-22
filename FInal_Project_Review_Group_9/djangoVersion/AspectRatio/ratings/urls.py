from django.contrib import admin
from django.urls import path
from AspectRatio import views
from ratings import views
from ratings.views import ReviewViewSet, ReviewView, BooksView, DvdsView, ElectronicsView, KitchenView
from rest_framework import routers
from django.conf.urls import include

router= routers.DefaultRouter()
router.register(r'details', ReviewViewSet)  #details is url

urlpatterns = [

    path('',include(router.urls)),
    path('list', ReviewView.as_view()),
    path('list/books', BooksView.as_view()),
    path('list/kitchen-ware', KitchenView.as_view()),
    path('list/electronics', ElectronicsView.as_view(), name='electronics-list'),
    path('list/dvds', DvdsView.as_view()),
    
]