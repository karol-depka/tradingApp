import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-trade',
  templateUrl: './new-trade.component.html',
  styles: []
})
export class NewTradeComponent implements OnInit {

  coinList: string[];

  constructor() { }

  ngOnInit() {
    this.coinList = ['EUR', 'USD', 'GBP']
  }

}
