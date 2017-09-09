import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styles: []
})
export class TradesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  showNewTrade(){
    this.router.navigate(['/new-trade'])
  }

}
