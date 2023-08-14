import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styles: [
  ]
})
export class BoxComponent {
  cartItems:any;

  constructor(private us:UserService){
    this.us.data$.subscribe(data =>this.cartItems = data)
  }

   updateMessage() {
    this.us.updateData({cart:this.cartItems.cart+1})

    }
}

