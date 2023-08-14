import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   private mySubject=new Subject<number>();

   data1$=this.mySubject.asObservable();
  
   // emit a value
   setData1(){
      this.mySubject.next(1);
      //console.log();   
   // console.log(this.mySubject.subscribe(value=>console.log(value)));  
   }
  
   setData2(){
    this.mySubject.next(2);
   }

}
