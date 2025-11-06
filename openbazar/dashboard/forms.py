from django import forms
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from .models import *


class CustomUserForm(UserCreationForm):
    class Meta:
        model = CustomUser
        fields = "__all__"
        exclude = ["is_staff"]

class CustomAuthenticationForm(AuthenticationForm):
    user_name = forms.CharField(widget=forms.TextInput(attrs={"placeholder":"Enter your username"}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={"placeholder":"Enter your Email"}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={"placeholder":"Enter your Password"}))


class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = "__all__"


class AddressForm(forms.Modelform):
    class Meta:
        model = Address
        fields = "__all__"


class CatagoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ("name",)