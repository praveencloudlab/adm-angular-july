import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  num!:number;

  constructor(private ds:DataService){
    this.ds.setData1(); // emits value1
    //this.ds.mySubject.subscribe(data =>this.num = data);
  }
  ngOnInit(): void {
    
    this.ds.data1$.subscribe(data =>console.log(data));

  }


}
