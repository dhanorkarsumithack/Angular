import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularBasic';
  slogan='Learn with neml and grow with neml';
  display=false;
  
  onclick(){
    this.display=true;
  }
}
