from django.db import models
import string
import random

def generate_unique_code():
    """
    Create a unique room for 
    each course
    """
    length = 8
    
    while True:
        #Generate a random code that is k length
        code = ''.join(random.choices(string.ascii_uppercase, k=length))

        #Finds out if code isn't already generated
        if Room.objects.filter(code= code).count() == 0:
            break
    
    return code
    

# Create your models here.
class Room(models.Model):
    code = models.CharField(max_length=100, default= "", unique=True)
    school = models.CharField(max_length=50, default="", unique=False)
    department = models.CharField(max_length=100, default= "", unique=False)
    course = models.CharField(max_length=100, default= "", unique=True)
    submit = models.BooleanField(null= False, default= False)
    votes_to_skip = models.IntegerField(null= False, default= 1)
    created_at = models.DateTimeField(auto_now_add= True)

    