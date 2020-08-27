from django.contrib.auth.models import User, Group
from rest_framework import generics, permissions, serializers


# first we define the serializers
class UserSerializer(serializers.ModelSerializer):
    # creates a new user
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

    class Meta:
        model = User
        fields = ('username', 'email', "first_name", "last_name")

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ("name", )