from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
urlpatterns = [
    path('auth/', include('accounts.urls')),
    path('token/refresh/', TokenRefreshView.as_view()),
    path('course/', include('courses.urls')),
]