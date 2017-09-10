import { Coin } from './coin'

export class Trade {
    
   constructor(
        public sellCurrency:Coin,
        public sellAmount:number,
        public buyCurrency:Coin,
        public buyAmount:number,
        public rate:number,
        public dateBooked:Date,
    ){}


}
