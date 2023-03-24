import { Component } from '@angular/core';
import { IDeactivateComponent } from '../candeactivate-guard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent {
   name:any;
   email:any;
   message:any;
  
   canExit(){
    if(this.name || this.email || this.message){
     return confirm('You have unsaved changes. do you really want to discard these changes');
    }else{
      return true;
    }
   }



}
