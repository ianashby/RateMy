from rest_framework import serializers
from .models import Room

class RoomSerializers(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id', 'school', 'department', 'course', 
                'submit', 'votes_to_skip', 'created_at')
        
