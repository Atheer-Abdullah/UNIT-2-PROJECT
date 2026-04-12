from django.shortcuts import render

def home(request):
    return render(request, 'main/index.html')

def features(request):
    return render(request, 'main/features.html')

def growth_journey(request):
    return render(request, 'main/growth.html')

def map_view(request):
    return render(request, 'main/map.html')

def regions(request):
    return render(request, 'main/regions.html')

def riyadh(request):
    return render(request, 'main/riyadh.html')

def eastern(request):
    return render(request, 'main/eastern.html')

def jazan(request):
    return render(request, 'main/jazan.html')

def makkah(request):
    return render(request, 'main/makkah.html')

def medina(request):
    return render(request, 'main/medina.html')

def tabuk(request):
    return render(request, 'main/tabuk.html')

def hail(request):
    return render(request, 'main/hail.html')

def najran(request):
    return render(request, 'main/najran.html')

def northern(request):
    return render(request, 'main/northern.html')

def vision(request):
    return render(request, 'main/vision.html')

def contact(request):
    return render(request, 'main/contact.html')

def education(request):
    return render(request, 'main/education.html')