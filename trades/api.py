from rest_framework.viewsets import ModelViewSet
from .models import Trade, TypeMoney
from .serializers import TradeSerializer, TypeMoneySerializer


class TradeViewSet(ModelViewSet):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer
    ordering_fields = ("date_booked",)


class TypeMoneyViewSet(ModelViewSet):
    queryset = TypeMoney.objects.all()
    serializer_class = TypeMoneySerializer
