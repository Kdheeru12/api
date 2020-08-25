from django.db import connection
from django.contrib.auth import get_user_model,authenticate,login,logout
from django.core.mail import send_mail
from ..models import*
import random
from rest_framework import status
from django.conf import settings
class User():
    def __init__(self):
        self.db = connection.cursor()


    def get_dict_serializer(self,rows,columns):
        """ give serialize data in dictonary format from QuerySet which are executed with python cursors """
        result = []
        try:
            for value in rows:
                tmp = {}
                for (index, column) in enumerate(value):
                    tmp[columns[index][0]] = str(column)
                result.append(tmp)

            if len(result) == 1:
                result = result[0]

            respose_code = status.HTTP_200_OK
            if len(result) == 0:
                respose_code = status.HTTP_204_NO_CONTENT
        except Exception as e:
            result.append(e)
            respose_code = status.HTTP_406_NOT_ACCEPTABLE

        serializers_obj = {"status": "success", "fields": result, "response_code":respose_code}
        return serializers_obj

    def custom_serializer(self, query, respone_status_code=''):
        """ give serialize data in dictonary format from QuerySet which are executed in django method """
        query_result = []
        if type(query) is list:
            query_result = query
            respose_code = status.HTTP_200_OK
        elif "QuerySet" not in str(type(query)):

            if type(query) is dict or type(query) is list:
                query_result = query
            else:
                query_result.append(query)
            respose_code = status.HTTP_300_MULTIPLE_CHOICES
        else:
            fields = query.values()
            for i in fields:
                query_result.append(i)
            respose_code = status.HTTP_200_OK

        if len(query_result) == 0:
            respose_code = status.HTTP_204_NO_CONTENT
        if len(str(respone_status_code)):
            respose_code = respone_status_code
        res_status = 'success'
        if respose_code in range(400, 500):
            res_status = 'fail'

        serializers_obj = {"status": res_status, "fields": query_result, "response_code": respose_code}
        return serializers_obj

    def UserRegistration(self, fields):
        """Method to save fields to database and than send verification code to user"""
        email_count = get_user_model().objects.filter(email=fields['email']).count()
        if email_count > 0:
            return self.custom_serializer("Email Already Exists",respone_status_code = status.HTTP_406_NOT_ACCEPTABLE)
        else:
            user = get_user_model().objects.create(
                username=str(fields['firstname'])+str(fields['lastname']),
                first_name=fields['firstname'],
                last_name=fields['lastname'],
                email=fields['email']
            )

            user.set_password(fields['password'])
            user.save()

            user_data = dict()
            user_data['id'] = user.id
            user_data['schoolname'] = fields['schoolname']
            user_data['mobile'] = fields['mobile']
            user_data['address'] = fields['address']
            user_data['city'] = fields['city']
            user_data['verification_code'] = random.SystemRandom().randint(100000,999999)

            dt_user = DtUser.objects.create(**user_data)
            dt_user.save()

            subject = 'Welcome to Patrika'
            message = 'This is the verification code to Verify Your Email  '+str(user_data['verification_code'])
            recepient = fields['email']
            send_mail(subject,message, settings.EMAIL_HOST_USER, [recepient], fail_silently=False)

            return self.custom_serializer("Added Succesfully!",respone_status_code = status.HTTP_200_OK)

    def validate_code(self,request,fields):
        """validates the verification code sent to the user through email"""
        user = get_user_model().objects.filter(email=fields['email']).values('id','username','first_name','last_name').get()
        username = user['username']

        verification_code = DtUser.objects.filter(id=user['id']).values('verification_code').get()
        if verification_code['verification_code'] == int(fields['code']):
            authen_user = authenticate(username=username, password=fields['password'])
            if authen_user:
                login(request,authen_user)
                return self.custom_serializer(user,respone_status_code = status.HTTP_200_OK)
        else:
            return self.custom_serializer("Verification code is not equal",respone_status_code = status.HTTP_406_NOT_ACCEPTABLE)

    def get_profile_details(self,fields):
        """Gives all the profile details of user(used mysql concepts here)"""
        query = "SELECT dtu.schoolname,dtu.address,dtu.city,dtu.mobile FROM dt_user dtu where dtu.id='"+str(fields['id'])+"'"
        self.db.execute(query)
        rows = self.db.fetchall()
        column = self.db.description
        return self.get_dict_serializer(rows, column)

    def logout(self,request):
        """Method to logout from Application"""
        logout(request)
        return self.custom_serializer("Logout Successfully",respone_status_code=status.HTTP_406_NOT_ACCEPTABLE)

    def login(self,request,fields):
        """Method to Login to the Application"""
        user = get_user_model().objects.filter(email=fields['username']).values('username').get()
        username = user['username']
        authen_user = authenticate(username=username, password=fields['password'])
        if authen_user:
            login(request, authen_user)
            return self.custom_serializer("Logged In Successfully!", respone_status_code=status.HTTP_200_OK)
        else:
            return self.custom_serializer("Credentials are wrong",respone_status_code=status.HTTP_406_NOT_ACCEPTABLE)

    def modify_password(self,fields):
        """Used to modify password"""
        auth_user= dict()
        auth_user['password'] = fields['new_password']
        get_user_model().objects.filter(id=fields['id']).update(**auth_user)
        return self.custom_serializer("Password Modified Successfully!", respone_status_code=status.HTTP_200_OK)




