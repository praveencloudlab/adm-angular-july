import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers=[87,43,54,-20,23,43,-10,16,10,100]
  
  greetMessage!:String;
  childGreeting!:any;

  greet(greetMessage: string){
    this.greetMessage = greetMessage;
  }

  childMsg(msg:any){
    this.childGreeting=msg
  }

}
