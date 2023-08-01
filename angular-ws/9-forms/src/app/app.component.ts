import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  onSubmit(){
    console.log(this.productForm.value);
    
  }

  //profileForm=new FormGroup({favorateColor:new FormControl('blue',[])})
  productForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.productForm=this.formBuilder.group(
      {
        name:['', [Validators.required,Validators.minLength(3)]],
        price:['', [Validators.required,Validators.minLength(3)]],
        description:['', Validators.required]
      });
  }

  fc():{[key:string]:AbstractControl | null}{
    return this.productForm.controls;
   }

  
  /*
  productForm=new FormGroup(
    {
    name:new FormControl('',Validators.required),
    price:new FormControl(''),
    description:new FormControl('')
  });
  */



}
