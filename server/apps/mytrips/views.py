from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def mytrips(request):
    print("My trips page")
    return HttpResponse()

