import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  products:any;
  constructor(private ps:ProductService,private router:Router){}
  handleDeleteProduct(id:any){
    this.ps.deleteProduct(id).subscribe(resp=>console.log(resp));
    this.router.navigate(['/list-products/refresh']);
  }
  
  ngOnInit() {
    this.ps.listProducts().subscribe(products=>this.products=products);
  }

}
