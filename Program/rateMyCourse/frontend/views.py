from django.shortcuts import render

# Create your views here.

# take the request and return the index html
def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')