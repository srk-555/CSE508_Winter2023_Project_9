from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from ratings.serializers import ReviewSerializer
from ratings.models import Reviews
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import generics

# Create your views here.
class ReviewViewSet(viewsets.ModelViewSet):
    queryset=Reviews.objects.all()
    serializer_class=ReviewSerializer
    #filter_backends = (SearchFilter, OrderingFilter)
    #search_fields = ('product_name')

class ReviewView(generics.ListAPIView):
    queryset=Reviews.objects.all()
    serializer_class=ReviewSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('id','product_name')


