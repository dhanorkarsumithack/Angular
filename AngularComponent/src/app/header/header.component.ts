import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  slogan:string='Your one stop shop for everything!'
  
  source:string='/assets/shooping.svg';

  getSlogan(){
    return 'This is new slogan for this web application.'
  }
}