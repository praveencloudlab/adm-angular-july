import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '8-pipes';
  today=new Date();

  emp={id:10,name:'Praveen',salary:858466}

}
