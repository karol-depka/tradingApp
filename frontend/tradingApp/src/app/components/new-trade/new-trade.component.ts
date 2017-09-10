import { Component, OnInit } from '@angular/core';
import { Trade } from '../../class/trade';
import { Coin } from '../../class/coin';

@Component({
  selector: 'app-new-trade',
  templateUrl: './new-trade.component.html',
  styles: []
})
export class NewTradeComponent implements OnInit {

  coinList:string[];
  
  submitted = false;
  trade = new Trade();
  

  constructor() { }

  ngOnInit() {
    this.coinList = ['EUR', 'USD', 'GBP']
    

  }

  onSubmit(){ this.submitted = true }

}
