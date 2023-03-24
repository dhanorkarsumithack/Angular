import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs";
import { Subject } from "rxjs";
import { map } from "rxjs";
import { Product } from "../model/products";

@Injectable({
    providedIn:"root"
})
export class ProductService{
    allProducts:Product[]=[];
    isFetching:boolean=false;
    error=new Subject<string>()
    constructor(private http:HttpClient){}
    createProduct(products:{pName:string,desc:string,price:string}){
        console.log(products);
        const headers=new HttpHeaders({'myheader':'sumit'});
        this.http.post<{name:string}>('https://angular-701bf-default-rtdb.firebaseio.com/product.json',products,{headers:headers})
          .subscribe((res)=>{
            console.log(res);
          },
          (err)=>{
            this.error.next(err.message)
          }
          )
    }

    fetchProduct(){
        const headers=new HttpHeaders()
            .set('content-type','application/json')
            .set('Access-Control-Allow-Origin','*');
        this.isFetching=true;
        const param=new HttpParams().set('print','pretty')
        .set('pageNum',1);
        return this.http.get<{[key:string]:Product}>('https://angular-701bf-default-rtdb.firebaseio.com/product.json',
                    {'headers':headers,params:param})
        .pipe(map((res)=>{
          const products=[];
          for(const key in res){
            if(res.hasOwnProperty(key)){
              products.push({...res[key],id:key})
            }
          }
          return products;
        }),catchError((err)=>{
        // write the logic for loggind error
        return throwError(err);
        })
            
        )
        
    }

    deleteProduct(id:string){
        let header=new HttpHeaders();
        header=header.append('myHeader1','value1');
        header=header.append('myHeader2','value2');
        this.http.delete('https://angular-701bf-default-rtdb.firebaseio.com/product/'+id+'.json',{headers:header})
        .subscribe();
    }

    deleteAllProduct(){
        this.http.delete('https://angular-701bf-default-rtdb.firebaseio.com/product.json')
        .subscribe();
    }

    updateProduct(id:string,value:Product){
        this.http.put('https://angular-701bf-default-rtdb.firebaseio.com/product/'+id+'.json',value)
        .subscribe();
    }

}