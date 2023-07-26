import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 married = false;

  f1(e:any){
      console.log(e.value);
      
  }

 // create function in ts
 test(e:any){ // test is a function
  //console.log(e.checked);
  this.married=!e.checked;
  
 }


}
