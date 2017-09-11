import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BackendUriProvider } from './services/settings';

//Routes
import { APP_ROUTING } from './app.routes';

//Services
import { CoinService } from './services/coin.service';
import { TradeService } from './services/trade.service';


//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TradesComponent } from './components/trades/trades.component';
import { NewTradeComponent } from './components/new-trade/new-trade.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TradesComponent,
    NewTradeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [
    BackendUriProvider,
    CoinService,
    TradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
