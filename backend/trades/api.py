import requests

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import list_route
from .models import Trade, TypeMoney
from .serializers import TradeSerializer, TypeMoneySerializer


class TradeViewSet(ModelViewSet):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer
    ordering_fields = ("date_booked",)

    @list_route(methods=['get'])
    def getRate(self, request, pk=None):
        
        sell_currency = self.request.query_params.get('sell_currency', None)
        buy_currency = self.request.query_params.get('buy_currency', None)
        rate_request = requests.get(
            "http://api.fixer.io/latest?base=" + sell_currency + 
            "&symbols=" + buy_currency)

        rate = rate_request.json()["rates"][str(buy_currency)]

        return Response(rate)


class TypeMoneyViewSet(ModelViewSet):
    queryset = TypeMoney.objects.all()
    serializer_class = TypeMoneySerializer
