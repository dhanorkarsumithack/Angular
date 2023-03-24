import { Component, OnInit } from '@angular/core';
import { Observable,of,from,map, filter,interval} from 'rxjs';
import { DataService } from './data.service';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent implements OnInit{

  title = 'Obserable';

  constructor(private dataService:DataService){

  }

  // myObserver=new Observable((observer)=>{
  //   console.log("Obserable start");
  //   setTimeout(()=>{observer.next('1')},1000);
  //   setTimeout(()=>{observer.next('2')},2000);
  //   setTimeout(()=>{observer.error(new Error('something went wrong ! please try again later.'))},3000);
  //   setTimeout(()=>{observer.next('4')},4000);
  //   setTimeout(()=>{observer.next('5')},5000);
  //   setTimeout(()=>{observer.complete()},6000);

  //  observer.next("1");
  //  observer.next("2");
  //  observer.next("3");
  //  observer.next("4");
  //  observer.next("5");
  // })

//   myObserver = Observable.create((observer: {
//     complete: any;
//     error: any; next: (arg0: string) => void; 
// })=>{
//     setTimeout(()=>{observer.next("A")},1000);
//     setTimeout(()=>{observer.next("B")},2000);
//     setTimeout(()=>{observer.next("C")},3000);
//     // setTimeout(()=>{observer.error(new Error('something went wrong ! please try again later.'))},3000);
//     setTimeout(()=>{observer.next("D")},4000);
//     setTimeout(()=>{observer.next("E")},5000);
//     setTimeout(()=>{observer.complete()},6000);

//   })

  array1=[1,2,3,4,5];
  array2=['A','B','C'];
 
  // myObserable=of(this.array1,this.array2,234,345,6,"je;df");
  
//   myObserable=from(this.array1).pipe(map((val)=>{
//     return val*5;
//   }),
//   filter((val)=>{
//     return val>=15;
//  })) ;

//   transformobs=this.myObserable.pipe(map((val)=>{
//     return val*5;
//   }),
//   filter((val)=>{
//     return val>=15;
//  })) 

  // filteredObs=this.transformobs.pipe(filter((val)=>{
  //    return val>=15;
  // }))

  counterObservable = interval(1000);
  countersub:any;
  ngOnInit(){
    // this.myObserable.subscribe((val: any)=>{
    //   console.log(val);
    // },
    // (error: { message: any; })=>{
    //   alert(error.message);
    // },
    // ()=>{
    //   alert("Obseralbe complete  emitting all values");
    // }
    // );
    

  }
  unsubscribe() {
    this.countersub.unsubscribe();
  }
  subscribe(){
    this.countersub=this.counterObservable.subscribe((val)=>{
      console.log(val);
    })
  }
}
