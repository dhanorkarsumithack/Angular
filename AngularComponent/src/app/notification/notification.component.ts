import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeout:displayNotification}">
              <p>This website uses cookies to provide better user experience. </p>
              <div class="close"><button class="btn btn-danger" (click)="hideDisplay()">X</button></div>
              </div>`,
  styles: [".notification-div{margin:10px 0; padding: 10px 20px; background-color:#FAD7A0; text-align:center; } ","p{font-size:14px;}",".close{float:right; margin-top:-35px;}",
            ".fadeout{visibility:hidden; opacity:0; transition:visibility 0s 2s, opacity 2s linear}"
          ]
})
export class NotificationComponent {
  displayNotification:boolean=false;
 
  
  hideDisplay(){
    this.displayNotification=true;
  }
}
