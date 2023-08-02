import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { SharedProductService } from './shared-product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService:UserService,private sharedService:SharedProductService){}

  products:any
  editProduct(product:any){
  this.sharedService.selectProduct(product);
    
  }
  
  ngOnInit(): void { // asynchronized
  
    this.userService.getProducts()
    .subscribe(products =>this.products = products);
  }


}
