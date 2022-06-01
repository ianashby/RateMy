from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ('id','code', 'school', 'department', 'course', 
                'submit', 'votes_to_skip', 'created_at')
        
