import { Injectable, Inject } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { BackendUri } from './settings';
import { Trade } from '../class/trade'

@Injectable()
export class TradeService {

  

  constructor(
    private _http: Http,
    @Inject(BackendUri) private _backendUri
  ) { }

  getAll():Observable<Trade[]> {
    return this._http
      .get(`${this._backendUri}/trades`)
      .map(res => res.json())
  }

  getRate(sellCurrency:string, buyCurrency: string ): Observable<number>{
    return this._http
               .get(`${this._backendUri}/trades/getRate?sell_currency=${sellCurrency}&buy_currency=${buyCurrency}`)
               .map(res => res.json())
  }

  createTrade(trade: Trade):Observable<Trade>{
    const body = {
      sell_currency :trade.sell_currency,
      sell_amount: trade.sell_amount,
      buy_currency: trade.buy_currency,
      buy_amount: trade.buy_amount,
      rate: trade.rate
      }
   

    return this._http
               .post(`${this._backendUri}/trades/`,trade)
               .map(response => response.json() as Trade)
  }


}
