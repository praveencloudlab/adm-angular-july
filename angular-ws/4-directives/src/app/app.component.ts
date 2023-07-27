import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   isActive = true;
   isDisabled = false;
    //o null '' "" false are falsy values
    numbers=[10,20,37,40,50,93,70,80];
    products=[{id:10,name:'Pen',price:76},{id:11,name:'Laptop',price:56000},{id:12,name:'Mobile',price:34000}]

    toggleClasses(){
      this.isActive=!this.isActive;
      this.isDisabled=!this.isDisabled;
    }
  
}
