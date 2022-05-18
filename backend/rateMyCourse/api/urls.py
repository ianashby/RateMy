from turtle import home
from django.urls import path
from .views import main

#If we get a Url that is blank nothing on it then call the main function
urlpatterns = [
    path('home', main),
    path('', main)
]