from django.db import models
from django.utils.translation import gettext as _

# Create your models here.


class Reviews (models.Model):

    product_name = models.CharField(("product_name"), max_length=255, default='default_value')
    product_type = models.CharField(("product_type"), max_length=255, default='default_value')
    rating = models.FloatField(("ratings"), default=0.0)
    aspect_ratings = models.CharField(("aspect_ratings"), max_length=255, default='default_value')


class Books (models.Model):
    plot = models.CharField(("plot"), max_length=255, default='default_value')
    character_development = models.CharField(("character_development"), max_length=255, default='default_value')
    writing_style = models.CharField(("writing_style"), max_length=255, default='default_value')
    theme = models.CharField(("theme"), max_length=255, default='default_value')
    pacing = models.CharField(("pacing"), max_length=255, default='default_value')
    dialogue = models.CharField(("dialogue"), max_length=255, default='default_value')
    setting = models.CharField(("setting"), max_length=255, default='default_value')
    tone_mood = models.CharField(("tone_mood"), max_length=255, default='default_value')
    originality = models.CharField(("originality"), max_length=255, default='default_value')
    ending = models.CharField(("ending"), max_length=255, default='default_value')
    world_building = models.CharField(("world_building"), max_length=255, default='default_value')
    genre = models.CharField(("genre"), max_length=255, default='default_value')
    narration = models.CharField(("narration"), max_length=255, default='default_value')
    emotion = models.CharField(("emotion"), max_length=255, default='default_value')
    depth_of_research = models.CharField(("depth_of_research"), max_length=255, default='default_value')
    structure_organization = models.CharField(("structure_organization"), max_length=255, default='default_value')
    clarity = models.CharField(("clarity"), max_length=255, default='default_value')
    suspense = models.CharField(("suspense"), max_length=255, default='default_value')
    symbolism = models.CharField(("symbolism"), max_length=255, default='default_value')
    imagery = models.CharField(("imagery"), max_length=255, default='default_value')
    delivery = models.CharField(("delivery"), max_length=255, default='default_value')

    	



class DVD (models.Model):

    picture_quality = models.CharField(("picture_quality"), max_length=255, default='default_value')
    sound_quality = models.CharField(("sound_quality"), max_length=255, default='default_value')
    special_features = models.CharField(("special_features"), max_length=255, default='default_value')
    bonus_content = models.CharField(("bonus_content"), max_length=255, default='default_value')
    cast_performances = models.CharField(("cast_performances"), max_length=255, default='default_value')
    director_style = models.CharField(("director_style"), max_length=255, default='default_value')
    cinematography = models.CharField(("cinematography"), max_length=255, default='default_value')
    screenplay = models.CharField(("screenplay"), max_length=255, default='default_value')
    plot_twists = models.CharField(("plot_twists"), max_length=255, default='default_value')
    character_development = models.CharField(("character_development"), max_length=255, default='default_value')
    action_scenes = models.CharField(("action_scenes"), max_length=255, default='default_value')
    comedy = models.CharField(("comedy"), max_length=255, default='default_value')
    drama = models.CharField(("drama"), max_length=255, default='default_value')
    suspense = models.CharField(("suspense"), max_length=255, default='default_value')
    romance = models.CharField(("romance"), max_length=255, default='default_value')
    science_fiction = models.CharField(("science_fiction"), max_length=255, default='default_value')
    fantasy = models.CharField(("fantasy"), max_length=255, default='default_value')
    historical_accuracy = models.CharField(("historical_accuracy"), max_length=255, default='default_value')
    costumes_and_set_design = models.CharField(("costumes_and_set_design"), max_length=255, default='default_value')
    adaptation_from_a_book_or_other_source_material = models.CharField(("adaptation_from_a_book_or_other_source_material"), max_length=255, default='default_value') 
	



class Electronics (models.Model):

    performance_speed = models.CharField(("performance_speed"), max_length=255, default='default_value')
    battery_life = models.CharField(("battery_life"), max_length=255, default='default_value')
    display_screen_quality = models.CharField(("display_screen_quality"), max_length=255, default='default_value')
    sound_audio_quality = models.CharField(("sound_audio_quality"), max_length=255, default='default_value')
    build_quality_durability = models.CharField(("build_quality_durability"), max_length=255, default='default_value')
    design_aesthetics = models.CharField(("design_aesthetics"), max_length=255, default='default_value')
    ease_of_use = models.CharField(("ease_of_use"), max_length=255, default='default_value')
    connectivity = models.CharField(("connectivity"), max_length=255, default='default_value')
    software_operating_system = models.CharField(("software_operating_system"), max_length=255, default='default_value')
    storage_capacity = models.CharField(("storage_capacity"), max_length=255, default='default_value')
    camera_photography_capabilities= models.CharField(("camera_photography_capabilities"), max_length=255, default='default_value')
    gaming_performance = models.CharField(("gaming_performance"), max_length=255, default='default_value')
    energy_efficiency = models.CharField(("energy_efficiency"), max_length=255, default='default_value')
    price_value_for_money = models.CharField(("price_value_for_money"), max_length=255, default='default_value')
    brand_reputation = models.CharField(("brand_reputation"), max_length=255, default='default_value')
    customer_support_warranty = models.CharField(("customer_support_warranty"), max_length=255, default='default_value')
    accessories_included = models.CharField(("accessories_included"), max_length=255, default='default_value')
    security_privacy_features = models.CharField(("security_privacy_features"), max_length=255, default='default_value')
    voice_assistant_integration = models.CharField(("voice_assistant_integration"), max_length=255, default='default_value')
    virtual_augmented_reality_compatibility= models.CharField(("virtual_augmented_reality_compatibility"), max_length=255, default='default_value')
    portability = models.CharField(("portability"), max_length=255)


class Kitchen(models.Model):
    material = models.CharField(("material"), max_length=255, default='default_value')
    quality = models.CharField(("quality"), max_length=255, default='default_value')
    durability = models.CharField(("durability"), max_length=255, default='default_value')
    design = models.CharField(("design"), max_length=255, default='default_value')
    ease_of_use = models.CharField(("ease_of_use"), max_length=255, default='default_value')
    efficiency = models.CharField(("efficiency"), max_length=255, default='default_value')
    capacity = models.CharField(("capacity"), max_length=255, default='default_value')
    safety = models.CharField(("safety"), max_length=255, default='default_value')
    portability = models.CharField(("portability"), max_length=255, default='default_value')
    brand_reputation = models.CharField(("brand_reputation"), max_length=255, default='default_value')
    price= models.CharField(("price"), max_length=255, default='default_value')
    customer_support = models.CharField(("customer_support"), max_length=255, default='default_value')
    accessories = models.CharField(("accessories"), max_length=255, default='default_value')
    environmentally_friendly = models.CharField(("environmentally_friendly"), max_length=255, default='default_value')
    performance = models.CharField(("performance"), max_length=255, default='default_value')
    functionality = models.CharField(("functionality"), max_length=255, default='default_value')			
												


			
