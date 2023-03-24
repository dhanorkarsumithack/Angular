import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Event, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { AuthService } from './auth.service';
import { CourseGuardService } from './course-guard.service';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Routing';

  displyLoadingIndicator:boolean=false;

  constructor(private router:Router, private service:CoursesService,private activatedRoute:ActivatedRoute, private authService:AuthService){}
   
  ngOnInit(): void {
     this.activatedRoute.fragment.subscribe((value)=>{
         console.log(value);
         this.jumpTo(value);
     })

     this.router.events.subscribe((routerEvent:Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.displyLoadingIndicator=true;
      }
       
      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel){
        this.displyLoadingIndicator=false;
      }

     })
    }

    jumpTo(section:any){
      document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
    }

    login(){
          this.authService.login();
    }

    logout(){
         this.authService.logout();
    }
    

   
}
