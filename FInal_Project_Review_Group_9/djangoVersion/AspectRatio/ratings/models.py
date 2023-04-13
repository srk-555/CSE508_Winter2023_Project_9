from django.db import models
from django.utils.translation import gettext as _

# Create your models here.


class Reviews (models.Model):

    product_name = models.CharField(("product_name"), max_length=255)
    aspect_ratings = models.CharField(("aspect_ratings"), max_length=255)
