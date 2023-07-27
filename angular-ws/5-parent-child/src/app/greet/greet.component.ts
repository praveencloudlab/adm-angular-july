import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styles: [
  ]
})
export class GreetComponent {

  @Input()
  parentMsg:String=''
  @Output()
  messageEvent=new EventEmitter();

  sendToParent(msg:any){
    this.messageEvent.emit(msg)
  }

}
