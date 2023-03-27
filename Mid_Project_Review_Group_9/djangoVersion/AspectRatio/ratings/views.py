from django.shortcuts import render
from rest_framework import viewsets
from ratings.serializers import ReviewSerializer
from ratings.models import Reviews

# Create your views here.
class ReviewViewSet(viewsets.ModelViewSet):
    queryset=Reviews.objects.all()
    serializer_class=ReviewSerializer
