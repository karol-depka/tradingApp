import { RouterModule, Routes } from '@angular/router';

import { TradesComponent } from './components/trades/trades.component';
import { NewTradeComponent } from './components/new-trade/new-trade.component';



const APP_ROUTES: Routes = [
    { path: '', component: TradesComponent },
    { path: 'new-trade', component: NewTradeComponent }, 
    { path: '**', pathMatch: 'full', redirectTo: '' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
