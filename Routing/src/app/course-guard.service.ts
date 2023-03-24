import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class CourseGuardService implements CanActivate ,CanActivateChild{
    
    constructor(private authService:AuthService,private router:Router){

    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        console.log("CanActivateChild is called ");
        
       return this.canActivate(childRoute,state);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if(this.authService.IsAuthenticated()){
            return true;
        }else{
            this.router.navigate(['']);
            return false;
        }
    }
}