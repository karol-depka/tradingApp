import { Coin } from './coin'

export class Trade {
    
   constructor(
        public sell_currency?:Coin,
        public sell_amount?:number,
        public buy_currency?:Coin,
        public buy_amount?:number,
        public rate?:number,
        public date_booked?:Date,
    ){}




}
