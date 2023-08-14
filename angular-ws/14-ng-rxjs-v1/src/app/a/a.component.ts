import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styles: [
  ]
})
export class AComponent implements OnInit {
  
  num!: number;

  constructor(private ds:DataService){}

  
  ngOnInit(): void {
    this.ds.data1$.subscribe(data => this.num=data);
    
  }

}
