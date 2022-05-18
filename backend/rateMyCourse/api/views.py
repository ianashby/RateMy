from django.shortcuts import render
from rest_framework import generics
from .serializers import RoomSerializers
from .models import Room

# Create your views here.


class RoomView(generics.CreateAPIView):
    #A view that is set us for us to return all of the Rooms
    queryset = Room.objects.all()
    serializer_class = RoomSerializers

class RoomViewList(generics.ListAPIView):
    #A view that is set us for us to return all of the Rooms
    queryset = Room.objects.all()
    serializer_class = RoomSerializers