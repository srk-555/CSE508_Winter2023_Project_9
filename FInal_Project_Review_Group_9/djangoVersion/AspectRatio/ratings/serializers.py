from rest_framework import serializers
from ratings.models import Reviews,Electronics,DVD,Books,Kitchen


#create serializers here
class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Reviews
        fields="__all__"

class BooksSerializer(serializers.ModelSerializer):
    class Meta:
        model=Books
        fields="__all__"

class DvdSerializer(serializers.ModelSerializer):
    class Meta:
        model=DVD
        fields="__all__"

class ElectronicsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Electronics
        fields="__all__"

class KitchenSerializer(serializers.ModelSerializer):
    class Meta:
        model=Kitchen
        fields="__all__"