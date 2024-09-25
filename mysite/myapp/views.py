from django.shortcuts import render
from pytz import timezone
from datetime import datetime
from .models import User

def home(request):
    current_time = datetime.now(timezone("Asia/Kolkata")).strftime('%Y/%m/%d, %I:%M:%S %p')
    return render(request, 'home.html', {'current_time': current_time})

def about(request):
    return render(request, 'about.html')
def form_submit(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        user = User(name=name, email=email)
        user.save()
        return render(request, 'form_response.html', {'name': name, 'email': email})
    
def users(request):
    user_list = User.objects.all()
    return render(request, 'users.html', {'users': user_list})
