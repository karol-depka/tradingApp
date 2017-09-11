from rest_framework import serializers
from .models import Trade, TypeMoney


class TypeMoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeMoney
        fields = '__all__'


class TradeSerializer (serializers.ModelSerializer):

    class Meta:
        model = Trade
        fields = (
            'sell_currency', 'sell_amount', 'buy_currency', 
            'buy_amount', 'rate', 'date_booked')



