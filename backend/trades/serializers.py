from rest_framework import serializers
from .models import Trade, TypeMoney


class TradeSerializer (serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = '__all__'


class TypeMoneySerializer(serializers.ModelSerializer):
    class Meta:
        model = TypeMoney
        fields = '__all__'
