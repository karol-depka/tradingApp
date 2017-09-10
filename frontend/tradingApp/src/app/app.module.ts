import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//Routes
import { APP_ROUTING } from './app.routes'

//Services


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
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
