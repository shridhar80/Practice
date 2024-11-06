from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to Transflower..")


def about(request):
    return HttpResponse("Learning by colabartion..")

def contact(request):
    return HttpResponse("<h1>contact : 9865321458</h1>")

