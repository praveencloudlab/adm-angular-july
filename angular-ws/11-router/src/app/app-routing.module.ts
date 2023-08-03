import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'add-product', component: ProductFormComponent},
  { path: 'list-products', component: ProductsComponent},
  { path: 'list-products/refresh', component: ProductsComponent},
  { path: 'add-product/edit/:id', component: ProductFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
