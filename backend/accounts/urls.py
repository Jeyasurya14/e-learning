from django.urls import path
from .views import RegisterAPI, UserAPI
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns=[
    path('account/register/', RegisterAPI.as_view()),
    path('account/user/', UserAPI.as_view()),
    path('account/login/', TokenObtainPairView.as_view(), name='access_token'),
]