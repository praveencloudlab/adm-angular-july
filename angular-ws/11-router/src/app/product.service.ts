import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpoptions={
    headers:new Headers({'Content-Type': 'application/json'})
  }

  private apiUrl='http://localhost:3000/products';

  constructor(private http:HttpClient) { }

  listProducts(){
    return this.http.get(this.apiUrl);
  }

  saveProduct(product:any) {
    return this.http.post(this.apiUrl,product);
  }

  findById(id:any) {
  return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateProduct(id:any,product:any) {
    return this.http.put(`${this.apiUrl}/${id}`,product)
  }

  deleteProduct(id:any) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
