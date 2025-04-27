from django.shortcuts import render
from rest_framework import generics
from .serializers import CourseListSerializer
from .models import Course
from rest_framework.permissions import AllowAny

class CourseListView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseListSerializer
    permission_classes = [AllowAny]

class CourseDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseListSerializer
    permission_classes = [AllowAny]

