import { Coin } from './coin';

export interface Trade {
    sellCurrency:Coin;
    sellAmount:number;
    buyCurrency:Coin;
    buyAmount:number;
    rate:number;
    dateBooked:Date;
}
