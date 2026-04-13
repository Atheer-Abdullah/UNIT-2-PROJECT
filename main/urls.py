from django.urls import path
from . import views

urlpatterns = [
    # الصفحة الرئيسية
    path('', views.home, name='home'),

    # الصفحات الأساسية
    path('features/', views.features, name='features'),
    path('growth/', views.growth_journey, name='growth_journey'),
    path('map/', views.map_view, name='map'),
    path('regions/', views.regions, name='regions'),
    path('vision/', views.vision, name='vision'),
    path('contact/', views.contact, name='contact'),
    path('education/', views.education, name='education'),

    path('regions/details/', views.region_detail, name='region_detail'),
]