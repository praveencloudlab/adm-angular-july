import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any;
  data:any;
  offers:any

constructor(private us:UserService){
  this.us.data$.subscribe(data=>this.data = data);
  this.us.offers$.subscribe(data=>this.offers = data);
}


ngOnInit(): void {

  this.us.getUser().subscribe(data=>this.user = data)

  }





}
