
import { OnDestroy } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Product } from './model/products';
import { ProductService } from './Service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'AngularHttpRequest';
  allProducts:Product[]=[];
  isFetching:boolean=false;
  @ViewChild('productsForm') form:NgForm;
  editMode:boolean=false;
  currentProductId:string='';
  errMessage:string=null;
  errSub:Subscription;

  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.fetchProduct();
    this.errSub=this.productService.error.subscribe((message)=>{
      this.errMessage=message;
    })
  }

  onProductsFetch(){
    this.fetchProduct();
  }
  
  onProductCreate(products:{pName:string,desc:string,price:string}){
    if(!this.editMode){
      this.productService.createProduct(products);
    }else{
      this.productService.updateProduct(this.currentProductId,products);
    }
  }


  private fetchProduct(){
    this.productService.fetchProduct().subscribe((product)=>{
      this.isFetching=true;
      this.allProducts=product;
      this.isFetching=false;
    },(err)=>{
      this.errMessage=err.message;
    }
    )

  }

  onDeleteProduct(id:string){
   this.productService.deleteProduct(id);
  }

  onDeleteAllProduct(){
   this.productService.deleteAllProduct();
  }

  onEditClicked(id:string){
    // get the product based on id

    let currentProduct=this.allProducts.find((p)=>{ return p.id===id})
    console.log(this.form);
    this.currentProductId=id;
    //populate the form with the product details

    this.form.setValue({
      pName:currentProduct.pName,
      desc:currentProduct.desc,
      price:currentProduct.price
    })
    //change the button  value to update product
    this.editMode=true;
  }

  ngOnDestroy(): void {
    this.errSub.unsubscribe();
  }
}
