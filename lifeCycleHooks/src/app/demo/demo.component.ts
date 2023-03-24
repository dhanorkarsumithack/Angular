import { Component, Input,OnInit ,OnChanges, SimpleChanges, DoCheck,AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked,OnDestroy} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,OnChanges,DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input() value:string='sumit';

  constructor(){
    console.log("constructor called");
    // console.log(this.value);
    
  }

  ngOnInit(){
    console.log("ngonInit get called");
    // console.log(this.value);
  }

  ngOnChanges(change:SimpleChanges){
    console.log("ngOnchange is called ");
    console.log(change);
    
  }

  ngDoCheck(){
    console.log("ngDoCheck is called");
    
  }
   
  ngAfterContentInit(){
     console.log("ngAfterContentInit has been called");
     
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked has been called");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit has been called ");
    
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked get called");
    
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy gets called");
    
  }

}
