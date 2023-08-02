import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL='http://localhost:3000/products';

  constructor(private http:HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.apiURL);
  }

  saveProduct(product:any):Observable<any>{
    return this.http.post(this.apiURL,product);
  }

  findProduct(id:any):Observable<any>{
    return this.http.get(`${this.apiURL}/${id}`);
  }

  editProduct(id:any,product:any):Observable<any>{
    return this.http.put(`${this.apiURL}/${id}`,product);
  }
  

}
