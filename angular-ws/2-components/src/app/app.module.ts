import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { ProductsComponent } from './products/products.component';
import { BoxComponent } from './box/box.component';
import { EmpComponent } from './emp/emp.component';
import { AnimalComponent } from './animal/animal.component';
import { PersonsComponent } from './persons/persons.component';

@NgModule({
  declarations: [ // componrents 
    AppComponent, GreetComponent, ProductsComponent, BoxComponent, EmpComponent, AnimalComponent, PersonsComponent
  ],
  imports: [ // modules
    BrowserModule
  ],
  providers: [], // dependencies (DI)
  bootstrap: [AppComponent]
})
export class AppModule { }
