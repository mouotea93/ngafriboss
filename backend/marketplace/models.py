from django.db import models
from django.contrib.auth.models import AbstractUser, User
from django.urls import reverse
from django.conf import settings
from django.core.exceptions import NON_FIELD_ERRORS, ValidationError
from django.core.mail import send_mail
from datetime import datetime 

class Customer (models.Model):
    user = models.ForeignKey(User,on_delete=models.SET_NULL, null=True, blank=True)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip = models.CharField(max_length=255)
    country=models.CharField(max_length=255)
    phone = models.CharField(max_length=30)
    emailVerified = models.IntegerField(default=0)
    registrationDate = models.DateTimeField(auto_now=True)
    address = models.CharField(max_length=255)
        
    def __str__(self):
        return self.user.username

class Color(models.Model):
    name = models.CharField(max_length=255)
    hex = models.CharField(max_length=255)
    
    class Meta:
            ordering = ['name',]
        
    def __str__(self):
        return "{0} : {1}".format(self.name, self.hex)


class Shop (models.Model):
    pass

class ProductCategory(models.Model):
    name = models.CharField(max_length=255,unique=True)
    class Meta:
            ordering = ['name',]
        
    def __str__(self):
        return self.name

class Product (models.Model):
    shop = models.ForeignKey(Shop, on_delete=models.CASCADE)
    productCategory = models.ForeignKey(ProductCategory, on_delete=models.CASCADE)
    sku = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    url = models.CharField(max_length=255)
    longDesc = models.TextField()
    dateCreated = models.DateTimeField(auto_now=True)
    lastUpdated = models.DateTimeField(auto_now=True)
    unlimited = models.IntegerField()

    class Meta:
            ordering = ['name',]
        
    def __str__(self):
        return self.name

class ProductVariant(models.Model):
    color = models.ForeignKey(Color, related_name='productVariantList', on_delete=models.SET_NULL, null=True, blank=True)
    product = models.ForeignKey(Product, related_name='productVariantList',on_delete=models.CASCADE)
    width = models.CharField(max_length=255)
    height = models.CharField(max_length=255)
    composition = models.CharField(max_length=255)
    price = models.FloatField()
    cargoPrice = models.FloatField()
    taxPercent = models.FloatField()
    image = models.TextField()
    thumb = models.CharField(max_length=255)
    stock = models.IntegerField()
    sellCount = models.IntegerField()
    live = models.IntegerField()

    def __str__(self):
        return "{0} : {1}".format(self.product, self.price)

class CartItem(models.Model):
    productVariant =models.ForeignKey(ProductVariant, on_delete=models.CASCADE)
    amount = models.IntegerField()

    def __str__(self):
        return "{0} : {1}".format(self.productVariant, self.amount)

class Discount(models.Model):
   
    code = models.CharField(unique=True, max_length=255)
    discountPercent = models.IntegerField()
    status = models.IntegerField()

    class Meta:
            ordering = ['code',]
        
    def __str__(self):
        return "{0} : {1}".format(self.code, self.discountPercent)


class Order(models.Model):
    discount= models.ForeignKey(Discount, related_name='orderList',on_delete=models.SET_NULL, null=True, blank=True)
    user = models.ForeignKey(Customer, on_delete=models.CASCADE)
    shipName = models.CharField(max_length=255)
    shipAddress = models.CharField(max_length=255)
    billingAdress = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zip = models.CharField(max_length=255)
    country=models.CharField(max_length=255)
    phone = models.CharField(max_length=30)
    totalPrice = models.FloatField()
    totalCargoPrice = models.FloatField()
    date = models.DateTimeField(auto_now=True)
    shipped = models.IntegerField()
    cargoFirm = models.CharField(max_length=255)
    trackingNumber = models.CharField(max_length=255)
    
    class Meta:
        ordering = ['dateCreated',]
        
    def __str__(self):
        return "{0} : {1}".format(self.user.username, self.date)

  
class OrderDetail(models.Model):
    order = models.ForeignKey(Order, related_name='orderDetailList',on_delete=models.CASCADE)
    productVariant = models.ForeignKey(ProductVariant, on_delete=models.CASCADE)
    amount = models.IntegerField()

   
class Cart(models.Model):
    user = models.ForeignKey(Customer,on_delete=models.SET_NULL, null=True, blank=True)
    cartItemList = models.ManyToManyField(CartItem, related_name='cart')
    discount = models.ForeignKey(Discount,on_delete=models.SET_NULL, null=True, blank=True)
    totalCartPrice = models.FloatField()
    totalCargoPrice = models.FloatField()
    totalPrice = models.FloatField()
    dateCreated = models.DateTimeField(default=datetime.now())
    discount = models.ForeignKey(Discount,related_name='cartList', on_delete=models.SET_NULL, null=True, blank=True)
    
    class Meta:
        ordering = ['dateCreated',]
        
    def __str__(self):
        return "{0} : {1}".format(self.user.username, self.totalPrice)

