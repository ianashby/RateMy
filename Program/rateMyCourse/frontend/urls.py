from django.urls import path
from .views import index
#Where the main url is sent
urlpatterns = [
    path('', index)
]
