from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.exceptions import ValidationError
from rest_framework.authtoken.models import Token


# endpoint classes
class RegisterView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')

        if User.objects.filter(username=username).exists():
            raise ValidationError('Username already exists')
        if User.objects.filter(email=email).exists():
            raise ValidationError('Email already exists')

        user = User.objects.create_user(username=username, email=email, password=password)
        token = Token.objects.create(user=user)
        return Response({"message": "User created successfully!", 'token': token.key}, stauts=status.HTTP_201_CREATED)

class LoginView(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user:
            token, created = Token.objects.create(user=user)
            return Response({"message": "Login successful!", 'token': token.key}, status=status.HTTP_200_OK)
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)