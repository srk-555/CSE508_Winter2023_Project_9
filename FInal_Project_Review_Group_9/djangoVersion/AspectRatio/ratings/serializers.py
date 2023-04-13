from rest_framework import serializers
from ratings.models import Reviews


#create serializers here
class ReviewSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Reviews
        fields="__all__"