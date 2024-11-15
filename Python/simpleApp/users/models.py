from django.db import models

# Create your models here.
# Constructor to initialize the attributes (members)
class Product(models.Model):
    name=models.CharField(max_length=100)  # Member variable (attribute)
    description=models.TextField()
    price=models.DecimalField(max_digits=10, decimal_places=2)
  
    # Member function (method) 
    def __str__(self):
        return self.name
    
 
class Customer:
    # Constructor (initializer) to initialize object state
    def __init__(self, name, email, contactnumber):
        # The self keyword refers to the current instance of the object
        self.name = name    # Setting the name of the Customer
        self.email = email
        self.contactnumber = contactnumber
    
    # toString method (called when printing the object or converting it to a string)
    def __str__(self):
        return f"{self.name}"

