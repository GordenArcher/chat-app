from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib import auth
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_201_CREATED, HTTP_200_OK
from .models import Chat
from .serializers import UserSerializer


@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        data = request.data

        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        password2 = data.get('password2')

        if password != password2:
            return Response({"error": "Passwords do not match"}, status=HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({"error": f"Username '{username}' is already taken"}, status=HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({"error": f"Email '{email}' already exists"}, status=HTTP_400_BAD_REQUEST)

        user = User.objects.create_user(username=username, email=email, password=password)

        serializer = UserSerializer(user)
        return Response(serializer.data, status=HTTP_201_CREATED)


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        data = request.data
        username = data.get('username')
        password = data.get('password')

        # Authenticate the user
        user = auth.authenticate(username=username, password=password)

        if user is not None:
            return Response({"message": "Login successful"}, status=HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=HTTP_400_BAD_REQUEST)