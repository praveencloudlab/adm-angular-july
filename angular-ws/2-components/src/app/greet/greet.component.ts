import { Component } from '@angular/core';

@Component({
  selector: 'app-greet',
  template: `
      <h1>Greeting Component-v1</h1>
      <h2>{{msg}}</h2>
       <button>click me</button>
  `,
  styleUrls: ['./greet.component.css']
})
export class GreetComponent {
    msg='Good Morning';
}
