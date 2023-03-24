import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { EnrollService } from './services/enroll.service';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EnrollService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private enrollService:EnrollService){

  }
}
