import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
  // providers:[EnrollService]
})
export class JavascriptComponent {
  title:string='javascript';
  
  constructor(private enrollService:EnrollService){

  }

  onEnroll(){
    // const enrollService=new EnrollService();
    this.enrollService.onEnrollClicked(this.title);
  }
}
