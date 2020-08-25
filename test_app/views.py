from django.shortcuts import render,redirect
from django.views.generic import TemplateView
from rest_framework.views import APIView
from  django.http import HttpResponse
import json

from .controllers.user_controller import User
# Create your views here.

class Register(TemplateView):
    """To show Register form"""
    template_name = "register.html"

class VeifyCode(TemplateView):
    """To validate verification code"""
    def get(self,request, email=None,password=None):
        ret_data = {
            "email":email,
            "password":password
        }
        return render(request,"school-verify.html",context=ret_data)

class ValidateCode(TemplateView):
    """To show validate verification code form"""
    def get(self,request):
        user = User()
        data = request.GET
        data1 = data.dict()
        result = user.validate_code(request,data1)
        return redirect('/home/')


class AddUser(TemplateView):
    """To add register user details to database"""
    def get(self, request):
        user = User()
        data = request.GET
        data1 = data.dict()
        # data1['host_email'] = EMAIL_HOST_USER
        result = user.UserRegistration(data1)
        return HttpResponse(json.dumps(result), content_type="application/json")

class Home(TemplateView):
    """To show Home page"""
    template_name = "index.html"

class Profile(TemplateView):
    """To get all profile details of user"""
    def get(self,request):
        user = User()
        fields = dict()
        fields['id']=request.user.id
        profile_details = user.get_profile_details(fields)
        context = {
            'profile_details':profile_details['fields']
        }
        return render(request,"school-profile.html",context=context)

class ChangePassword(TemplateView):
    """To show modify password form"""
    template_name = "school-change-password.html"

class LoginView(TemplateView):
    """To show Login Form"""
    def get(self,request):
        if not request.user.is_authenticated:
            return render(request,'login.html')
        else:
            return redirect('/home/')

    template_name = "login.html"

class Login(APIView):
    """Login to the Application"""
    def get(self,request):
        if not request.user.is_authenticated:
            user = User()
            data = request.GET
            data1 = data.dict()
            result = user.login(request,data1)
            if result['status'] == "success":
                return redirect('/home/')
            else:
                return render(request, 'login.html')
        else:
            return redirect('/home/')

class Logout(APIView):
    """Logout of application"""
    def get(self,request):
        user = User()
        logout = user.logout(request)
        return redirect('/login/')


class ModifyPassword(APIView):
    """Modifying password of user"""
    def get(self,request):
        if not request.user.is_authenticated:
            return redirect('/login/')
        else:
            user = User()
            data = request.GET
            data1 = data.dict()
            modify_password = user.modify_password(data1)
            return HttpResponse(json.dumps(modify_password))
