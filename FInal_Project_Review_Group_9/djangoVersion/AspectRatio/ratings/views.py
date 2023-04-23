from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from ratings.serializers import ReviewSerializer, BooksSerializer, KitchenSerializer, DvdSerializer, ElectronicsSerializer
from ratings.models import Reviews
from ratings.models import Books,Electronics,DVD,Kitchen
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework import generics
from rest_framework.pagination import PageNumberPagination
from django.http import  JsonResponse


class MyPagination(PageNumberPagination):
    page_size = 50

# Create your views here.
class ReviewViewSet(viewsets.ModelViewSet):
    queryset=Reviews.objects.all()
    serializer_class=ReviewSerializer

class ReviewView(generics.ListAPIView):
    pagination_class = MyPagination
    queryset=Reviews.objects.all()
    serializer_class=ReviewSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('id','product_name')

class BooksView(generics.ListAPIView):
    queryset=Books.objects.all()
    serializer_class=BooksSerializer
    lookup_field = 'id'
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('id')



class ElectronicsView(generics.ListAPIView):
    queryset = Electronics.objects.all()
    serializer_class = ElectronicsSerializer
    filter_backends = (SearchFilter)
    search_fields = ('id')

class DvdsView(generics.ListAPIView):
    pagination_class = MyPagination
    queryset=DVD.objects.all()
    serializer_class=DvdSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('id')
    

class KitchenView(generics.ListAPIView):
    pagination_class = MyPagination
    queryset=Kitchen.objects.all()
    serializer_class=KitchenSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ('id')

