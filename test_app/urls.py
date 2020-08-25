from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', Register.as_view()),
    path('home/', Home.as_view()),
    path('profile/', Profile.as_view()),
    path('change_password/',ChangePassword.as_view()),
    path('login/',LoginView.as_view()),
    path('login_user/',Login.as_view()),
    path('add_user/',AddUser.as_view()),
    path('verify_code/<email>/<password>',VeifyCode.as_view()),
    path('validate_code/',ValidateCode.as_view()),
    path('logout/',Logout.as_view()),
    path('modify_password/',ModifyPassword.as_view()),


]