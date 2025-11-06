from django.contrib.auth.models import AbstractUser
from django.db import models

from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

# ---------- CATEGORY ----------
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=120, unique=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
    # Default AbstractUser fields you still have:
    # id, username, first_name, last_name, email, password, is_staff, is_active, date_joined, etc.

    # Custom fields
    image = models.ImageField(upload_to="media")
    def __str__(self):
        return self.username
    
# ---------- PRODUCT ----------
class Product(models.Model):
    chioce = [
        ("Rent","rent"),
        ("Sale","sale"),
        ("Graw","Graw")
    ]
    seller = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='products')
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True, blank=True)
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.PositiveIntegerField(default=1)
    image = models.ImageField(upload_to='products/', blank=True, null=True)
    state = models.CharField(choices=chioce)
    is_sold = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


# ---------- ORDER ----------
# class Order(models.Model):
#     buyer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
#     total_price = models.DecimalField(max_digits=10, decimal_places=2)
#     created_at = models.DateTimeField(auto_now_add=True)
#     completed = models.BooleanField(default=False)

#     def __str__(self):
#         return f"Order #{self.id} by {self.buyer.username}"


# ---------- ORDER ITEM ----------
# class OrderItem(models.Model):
#     order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     quantity = models.PositiveIntegerField(default=1)
#     price = models.DecimalField(max_digits=10, decimal_places=2)

#     def __str__(self):
#         return f"{self.quantity} x {self.product.title}"
    


# ---------- REVIEW (Optional) ----------
# class Review(models.Model):
#     product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='reviews')
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     rating = models.PositiveSmallIntegerField(default=5)
#     comment = models.TextField(blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return f"{self.rating}★ by {self.user.username} on {self.product.title}"



class Address(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    province_name = models.CharField(max_length=100)
    street = models.CharField(max_length=150)
    home_number = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.full_name}, {self.city}, {self.street} {self.home_number}"

