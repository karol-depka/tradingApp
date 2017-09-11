import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { Trade } from '../../class/trade';
import { Coin } from '../../class/coin';
import { CoinService } from '../../services/coin.service';
import { TradeService } from '../../services/trade.service';

@Component({
  selector: 'app-new-trade',
  templateUrl: './new-trade.component.html',
  styles: []
})
export class NewTradeComponent implements OnInit {

  coinList;
  rate:number;
  
  submitted = false;
  trade:Trade = {};

  constructor(
    private _coinService: CoinService,
    private _tradeService: TradeService
  ) { }

  ngOnInit() {
   
     this._coinService
         .getAll()
         .subscribe(data => this.coinList = data);
    
    
  }

  onChange(): void{
    if (this.trade.sell_currency && this.trade.buy_currency){
      this._tradeService
          .getRate(this.trade.sell_currency.toString(), this.trade.buy_currency.toString())
          .subscribe(data => this.trade.rate = data.toFixed(4))
    }
  }

  calculateBuyAmount():void {
    if(this.trade.sell_amount){
      this.trade.buy_amount = parseFloat((this.trade.sell_amount * this.trade.rate).toFixed(2));
    }
  }

  onSubmit(form: FormGroup):void{ 
    let trade: Trade;
    trade = Object.assign({}, this.trade, form.value) as Trade;
    console.log(trade);
    this._tradeService
        .createTrade(trade)
        .subscribe(data => console.log(data))

  }

}
