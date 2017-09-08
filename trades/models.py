from django.db import models


class TypeMoney(models.Model):
    name = models.CharField(max_length=3)


class Trade(models.Model):
    # Añadir el id personalizado
    sell_currency = models.ForeignKey(TypeMoney, on_delete=models.CASCADE)
    sell_amount = models.DecimalField(decimal_places=2)
    buy_currency = models.ForeignKey(TypeMoney, on_delete=models.CASCADE)
    buy_amount = models.DecimalField(decimal_places=2)
    rate = models.DecimalField(decimal_places=4)
    date_booked = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.sell_currency + "-->" + self.buy_currency
