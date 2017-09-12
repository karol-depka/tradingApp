import { Injectable, Inject } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { BackendUri } from './settings';
import { Coin } from '../class/coin'

@Injectable()
export class CoinService {

  constructor(
    private _http: Http,
    @Inject(BackendUri) private _backendUri
  ) { }

  getAll(): Observable<Coin[]> {

    return this._http
      .get(`${this._backendUri}/coins`)
      .map(res => res.json())
  }

}
