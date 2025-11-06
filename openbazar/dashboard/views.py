from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def dashboard_view(request):
    return render(request, 'main_content.html')

# def Home(request):
#     return render(request,'dashboard/main.html')

def product(request):
    return render(request, "dashboard/product/product.html")

def detailproduct(request):
    return render(request, "dashboard/product/productdetail.html")

def userview(request):
    return render(request, "dashboard/users/user.html")

def detialuserview(request):
    return render(request, "dashboard/users/profile.html")