
# from django.shortcuts import render, redirect
# from django.contrib.auth.forms import UserCreationForm
# from django.contrib.auth.views import LoginView, LogoutView
# from django.contrib import messages

# def register(request):
#     if request.method == 'POST':
#         form = UserCreationForm(request.POST)
#         if form.is_valid():
#             form.save()
#             messages.success(request, "Account created successfully!")
#             return redirect('login')
#     else:
#         form = UserCreationForm()
#     return render(request, 'users/register.html', {'form': form})

# class LoginView(LoginView):
#     template_name = 'users/login.html'

# class LogoutView(LogoutView):
#     template_name = 'users/logout.html'

# def home(request):
#     return render(request, 'users/home.html')

# def about(request):
#     return render(request, 'users/about.html')



from django.shortcuts import render
from django.http import HttpResponse

from .models import Customer, Product
from .forms import LoginForm,RegisterForm

def home(request):
    #return HttpResponse("Welcome to Transflower")
    return render(request, 'users/home.html')

def about(request):
    #return HttpResponse("Transflower Learning Pvt. Ltd.")
    return render(request, 'users/about.html')
   
def contact(request):
    #return HttpResponse("Transflower Learning Pvt. Ltd.")
    return render(request, 'users/contact.html')

def catalog(request):
    products = [
    {"name": "Laptop", "description": "A high-performance laptop", "price": 999.99},
    {"name": "Smartphone", "description": "A latest-generation smartphone", "price": 699.99},
    {"name": "Headphones", "description": "Noise-cancelling over-ear headphones", "price": 199.99},
    {"name": "Keyboard", "description": "Mechanical keyboard with RGB lighting", "price": 129.99},
    {"name": "Mouse", "description": "Wireless ergonomic mouse", "price": 49.99}
    ]
    return render(request, 'users/list.html',{'products': products})

def flowers(request):
    flowers = [
        Product("Gerbra", "Wedding Flower", 45.5),
        Product("Rose", "Valentine Flower", 65),
        Product("Jasmine","Smelling Flower", 23),
        Product("Lily", "Delicate Flower", 76),
        Product("Lotus", "worship", 12),
    ]
    return render(request, 'users/list.html',{'products': flowers})

def customers(request):

    customer=Customer("Sachin", "sachin.t@gmail.com", "988767654")

    customers = [
    Customer("Sachin", "sachin.t@gmail.com", "988767654"),
    Customer("Ravi", "sachin.t@gmail.com", "988767654"),
    Customer("Manish", "sachin.t@gmail.com", "988767654"),
    Customer("Sarang", "sachin.t@gmail.com", "988767654"),
    Customer("Seema", "sachin.t@gmail.com", "988767654"),
    ]

    return render(request, 'users/customers.html',{'customers': customers})

def login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']

            return render(request,'users/welcome.html',{'password':password,'email':email})
    else:
        form = LoginForm()
    return render(request,'users/login.html',{'form':form})

def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            location = form.cleaned_data['location']
            contactnumber = form.cleaned_data['contactnumber']
            firstname = form.cleaned_data['firstname']
            lastname = form.cleaned_data['lastname']

            return render(request,'users/welcome.html',{'email':email,'password':'manasi'})
    else:
        form = RegisterForm()
    return render(request,'users/register.html',{'form':form})