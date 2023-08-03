import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styles: [
  ]
})
export class ProductFormComponent implements OnInit {

  productForm!:FormGroup;
  constructor(private fb:FormBuilder,private ps:ProductService,private route:ActivatedRoute,private router:Router) {}
  
  products:any;

   handleSubmit(){
    let newProduct={'id':this.products.length+1,...this.productForm.value};
    //console.log(newProduct);
    //this.ps.saveProduct(newProduct).subscribe(product=>console.log(product));
    //this.router.navigate(['/list-products']);
    //this.productForm.reset();

    if(this.productId!==0){
      this.ps.updateProduct(this.productId,this.productForm.value).subscribe(product=>console.log(product));
      this.router.navigate(['/list-products']);
    }else{
      this.ps.saveProduct(newProduct).subscribe(product=>console.log(product));
      this.router.navigate(['/list-products']);
    }

  }
  productId=0;
  product={};
  ngOnInit() {

    this.productForm=this.fb.group({
      'name':[''],
      'price':[''],
      'description':['']
    });

    this.ps.listProducts().subscribe(products =>this.products=products);
    this.productId= Number(this.route.snapshot.paramMap.get('id'));
    console.log("ID:  "+this.productId);
    if(this.productId!==0){
      this.ps.findById(this.productId).subscribe(product=>{
        this.productForm.patchValue(product);

      });
    }
    
   

  }
  



}
