import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeCycleHooks'
  
  inputText:string='';

  onsubmit(inputEl:HTMLInputElement){
    this.inputText=inputEl.value;
  }

  destroy:boolean=true;

  DestroyComponent(){
    this.destroy=!this.destroy;
  }
 

}
