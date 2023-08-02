import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { SharedProductService } from '../shared-product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: [
  ]
})
export class ProductFormComponent implements OnInit {

  productForm!:FormGroup;
  products:any;
  subscription!:Subscription;
  product={}

  constructor(private fb:FormBuilder,private ps:UserService,private sharedService:SharedProductService){}
  
  saveProduct(){
   // if product id already exists, then edit, other wise save it
      this.ps.findProduct(this.productForm.get('id')).subscribe(product=>this.product=product)
      if(this.product){
        // edit
      }else{
        // save
      }
   // let newProd={"id":this.products.length+1,...this.productForm.value}
    //console.log(newProd);


    //this.ps.saveProduct(newProd).subscribe(data =>console.log(data));
  

  }

  

  ngOnInit(): void {
    this.ps.getProducts().subscribe(products =>this.products = products);
    this.productForm=this.fb.group({
      'name':[''],
      'price':[''],
      'description':['']
    });

    this.subscription=this.sharedService.selectedProduct$.subscribe(product=>{
      if(product){
                this.productForm.patchValue(product);
               
      }
    });
    
  }






}
