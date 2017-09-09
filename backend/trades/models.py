from django.db import models
from django.utils.crypto import get_random_string


def create_id():
        return "PR" + get_random_string(length=7)


class TypeMoney(models.Model):
    name = models.CharField(max_length=3)

    def __str__(self):
        return self.name


class Trade(models.Model):
    my_id = models.CharField(
        max_length=9, primary_key=True, editable=False, default=create_id)
    sell_currency = models.ForeignKey(
        TypeMoney, related_name="sell_currency", on_delete=models.CASCADE)
    sell_amount = models.DecimalField(max_digits=10, decimal_places=2)
    buy_currency = models.ForeignKey(
        TypeMoney, related_name="buy_currency", on_delete=models.CASCADE)
    buy_amount = models.DecimalField(max_digits=10, decimal_places=2)
    rate = models.DecimalField(max_digits=10, decimal_places=4)
    date_booked = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.sell_currency) + "-->" + str(self.buy_currency)

    
