import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  addProduct: FormGroup;
  ProductList: any = [] ;
  constructor() { }

  ngOnInit(): void {

    this.addProduct = new FormGroup({
      ID: new FormControl('', [Validators.required, Validators.pattern('^[ a-zA-Z0-9!@#$^*%_?<>|=&()\\-`.+,:/\"]*'), Validators.maxLength(10)]),
      Name: new FormControl('', [Validators.required, Validators.pattern('^[ a-zA-Z0-9!@#$^*%_?<>|=&()\\-`.+,:/\"]*'), Validators.maxLength(10)]),
      Rate: new FormControl('', [Validators.required, Validators.pattern('^[0-9"]*'), Validators.maxLength(3)]),
      Quality: new FormControl('', [Validators.required, Validators.pattern('^[ a-zA-Z0-9!@#$^*%_?<>|=&()\\-`.+,:/\"]*'), Validators.maxLength(10)]),
       
    });
  }
  add(){
    this.ProductList.push(this.addProduct.value)
    console.log(this.addProduct.value)
    console.log(this.ProductList)
    
  }
  clear(){
    this.addProduct.reset();
  }
  delete(ID){

   this.ProductList = this.ProductList.filter(function(value){ 
      return value.ID != ID;
  });

  }

}
