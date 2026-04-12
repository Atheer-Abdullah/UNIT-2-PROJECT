from django.shortcuts import render

# الصفحة الرئيسية
def home(request):
    return render(request, 'main/index.html')

# الصفحات الأساسية
def features(request):
    return render(request, 'main/features.html')

def growth_journey(request):
    return render(request, 'main/growth.html')

def map_view(request):
    return render(request, 'main/map.html')

def regions(request):
    return render(request, 'main/regions.html')

def vision(request):
    return render(request, 'main/vision.html')

def contact(request):
    return render(request, 'main/contact.html')

def education(request):
    return render(request, 'main/education.html')


# =========================
# المناطق
# =========================

def riyadh(request):
    return render(request, 'main/riyadh.html')

def makkah(request):
    return render(request, 'main/makkah.html')

def madinah(request):
    return render(request, 'main/madinah.html')

def qassim(request):
    return render(request, 'main/qassim.html')

def eastern(request):
    return render(request, 'main/eastern.html')

def asir(request):
    return render(request, 'main/asir.html')

def tabuk(request):
    return render(request, 'main/tabuk.html')

def hail(request):
    return render(request, 'main/hail.html')

def northern_borders(request):
    return render(request, 'main/northern.html')  # اسم الملف عندك northern.html

def jazan(request):
    return render(request, 'main/jazan.html')

def najran(request):
    return render(request, 'main/najran.html')

def al_baha(request):
    return render(request, 'main/albaha.html')

def al_jouf(request):
    return render(request, 'main/jouf.html')