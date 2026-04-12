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

        # المناطق (حسب الـ slug)
    path('regions/riyadh/', views.riyadh, name='riyadh'),
    path('regions/makkah/', views.makkah, name='makkah'),
    path('regions/madinah/', views.madinah, name='madinah'),
    path('regions/qassim/', views.qassim, name='qassim'),
    path('regions/eastern/', views.eastern, name='eastern'),
    path('regions/asir/', views.asir, name='asir'),
    path('regions/tabuk/', views.tabuk, name='tabuk'),
    path('regions/hail/', views.hail, name='hail'),
    path('regions/northern-borders/', views.northern_borders, name='northern-borders'),
    path('regions/jazan/', views.jazan, name='jazan'),
    path('regions/najran/', views.najran, name='najran'),
    path('regions/al-baha/', views.al_baha, name='al-baha'),
    path('regions/al-jouf/', views.al_jouf, name='al-jouf'),
]