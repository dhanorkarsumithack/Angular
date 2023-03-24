import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements AfterViewInit  {
    // @ViewChild('highlight') marker:ElementRef | undefined;
     @ViewChildren('highlight')marker:QueryList<any> | undefined;
     @ViewChild('childview')child:CounterComponent | undefined;
    ngAfterViewInit(){
      console.log(this.marker);
      // this.marker?.nativeElement.setAttribute('style','color:red;')
      this.marker?.first.nativeElement.setAttribute('style','color:red;')
      this.marker?.last.nativeElement.setAttribute('style','color:green;')
    }

    inc(){
      this.child?.increment();
    }

    dec(){
      this.child?.decrement();
    }
    

}
