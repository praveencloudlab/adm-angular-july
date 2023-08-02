import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedProductService {

  private selectedProduct=new BehaviorSubject<any>(null);
  selectedProduct$=this.selectedProduct.asObservable();
  
  selectProduct(product:any){
    this.selectedProduct.next(product);
  }

  constructor() { }

}
