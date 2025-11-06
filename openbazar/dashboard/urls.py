from django.urls import path
from . import views


urlpatterns = [
    path('', views.dashboard_view,name="dashboard"),
    # path('home/',views.Home,name="home"),
    path('product/',views.product,name="product"),
    path('detailproduct/',views.detailproduct,name="detailproduct"),
    path('users/',views.userview,name="users"),
    path('detailuser/',views.detialuserview,name="detailusers"),
]
