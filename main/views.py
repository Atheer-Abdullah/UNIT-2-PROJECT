from django.shortcuts import render, redirect
from django.http import HttpRequest, HttpResponse
from django.template import TemplateDoesNotExist

#  الصفحة الرئيسية - ترسل كوكي الزائر العادي
def home(request:HttpRequest):
    response = render(request, 'main/index.html')
    response.set_cookie("is_visitor", "yes", max_age=60*60*24)
    return response

# صفحة المناطق - تقرأ الكوكي الموقع (Signed) لعرض آخر منطقة
def regions(request):
    try:
        # فك تشفير الكوكي الموقع
        last_visited = request.get_signed_cookie("last_region", default=None)
    except:
        last_visited = None

    context = {
        'last_visited': last_visited
    }
    return render(request, 'main/regions.html', context)

# تفاصيل المناطق - ترسل الكوكي الموقع عند الزيارة
def region_detail(request):
    region_name = request.GET.get('name', '').lower()

    if not region_name:
        return redirect('regions')

    template_path = f'main/{region_name}.html'
    
    try:
        response = render(request, template_path)
        response.set_signed_cookie("last_region", region_name)
        return response
    except TemplateDoesNotExist:
        return redirect('regions')


def features(request:HttpRequest):
    return render(request, 'main/features.html')

def growth_journey(request:HttpRequest):
    return render(request, 'main/growth.html')

def map_view(request:HttpRequest):
    return render(request, 'main/map.html')

def vision(request:HttpRequest):
    return render(request, 'main/vision.html')

def contact(request:HttpRequest):
    return render(request, 'main/contact.html')

def education(request:HttpRequest):
    return render(request, 'main/education.html')