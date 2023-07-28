import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent {

  hitsCount: number=0;

  @Input()
  btnLabel:any;

  @Output()
  calculateTotalCount=new EventEmitter();



  calculateHitsCount(){
    this.hitsCount+=1;
    this.calculateTotalCount.emit(this.btnLabel);
  }

}
