import { Injectable, Inject } from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { BackendUri } from './settings';

@Injectable()
export class TradeService {

  

  constructor(
    private _http: Http,
    @Inject(BackendUri) private _backendUri
  ) { }

  getAll() {
    return this._http
      .get(`${this._backendUri}/trades`)
      .map(res => res.json())
  }

  getRate(sellCurrency:string, buyCurrency ){
    return this._http
               .get(`${this._backendUri}/trades/getRate?sell_currency=${sellCurrency}&buy_currency=${buyCurrency}`)
               .map(res => res.json())
  }

  createTrade(trade){
    const body = {
      sell_currency :trade.sell_currency,
      sell_amount: trade.sell_amount,
      buy_currency: trade.buy_currency,
      buy_amount: trade.buy_amount,
      rate: trade.rate
      }
    let headers = new Headers();
    //headers.append("Access-Control-Allow-Headers",)
    headers.append('Content-type','application/x-www-form-urlencoded');

    let options = new RequestOptions({headers: headers})
    return this._http
               .post(`${this._backendUri}/trades/`,this.toQueryString(body), options)
               .map(res => console.log("respuesta",res.json))
  }

  private toQueryString(obj: Object): string {
    var parts = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    };
    return parts.join('&');
  };

}
