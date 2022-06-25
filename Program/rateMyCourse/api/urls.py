from django.urls import path
from .views import RoomView, RoomViewList
#If we get a Url that is blank nothing on it then call the main function
urlpatterns = [
    path('room', RoomView.as_view()),
    path('list', RoomViewList.as_view())
]