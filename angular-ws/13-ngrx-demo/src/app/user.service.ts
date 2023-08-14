import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private dataSubject:BehaviorSubject<any>=new BehaviorSubject<any>({cart:0});
  private offersSubject:BehaviorSubject<any>=new BehaviorSubject<any>([{id:1,type:'daily',offer:50,product_id:100},{id:2,type:'weekly',offer:90,product_id:9864}]);


  data$: Observable<any>=this.dataSubject.asObservable();
  offers$: Observable<any>=this.offersSubject.asObservable();

  updateData(newData:any) {
    this.dataSubject.next(newData);
  }

  updateOffer(newDiscount:any,product_id:any){
    // make sure newDiscount applied to specified prodict ID with a loop
    this.offersSubject.next(newDiscount);
  }

  getUser():Observable<any>{
    const user={
      id:1,
      name:'Praveen'
    }
    // 'of' is a method from RxJS that converts the arguments into an absorvable
    return of(user);
  }


}
