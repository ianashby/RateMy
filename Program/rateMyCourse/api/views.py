from django.shortcuts import render
from rest_framework import generics, status
from .serializers import RoomSerializer
from .models import Room
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.


class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer



class RoomViewList(generics.ListAPIView):
    #A view that is set us for us to return all of the Rooms
    queryset = Room.objects.all()
    serializer_class = RoomSerializer