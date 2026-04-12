from django.urls import path
from . import views

urlpatterns = [
    # الصفحات الأساسية
    path('', views.home, name='home'),
    path('features/', views.features, name='features'),
    path('growth/', views.growth_journey, name='growth_journey'),
    path('map/', views.map_view, name='map'),
    path('regions/', views.regions, name='regions'),
    
    # روابط مناطق المملكة (الموجودة في ملفاتك)
    path('riyadh/', views.riyadh, name='riyadh'),
    path('eastern/', views.eastern, name='eastern'),
    path('jazan/', views.jazan, name='jazan'),
    path('makkah/', views.makkah, name='makkah'),
    path('medina/', views.medina, name='medina'),
    path('tabuk/', views.tabuk, name='tabuk'),
    path('hail/', views.hail, name='hail'),
    path('najran/', views.najran, name='najran'),
    path('northern/', views.northern, name='northern'),
    path('vision/', views.vision, name='vision'),
    path('contact/', views.contact, name='contact'),
    path('education/', views.education, name='education'),
]