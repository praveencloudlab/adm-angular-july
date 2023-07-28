import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  totalCount = 0;

  numbers=[10,20,30,-10,-15,50,100,-50,40];

  calculateTotalCount(number: any){
    console.log(number);
    this.totalCount=this.totalCount+number;
    
  }

  }


