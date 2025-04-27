from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.CharField( required=True, style={'input_type': 'email', 'placeholder':'Email'}),
    password = serializers.CharField(write_only=True,min_length=8, required=True, style={'input_type': 'password', 'placeholder':'Password'})
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        # extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
        return user