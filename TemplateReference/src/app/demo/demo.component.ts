import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  sayHello(inEl:HTMLInputElement){
    // alert('Hello '+inEl.value);
    console.log(inEl);
    
  }
}
