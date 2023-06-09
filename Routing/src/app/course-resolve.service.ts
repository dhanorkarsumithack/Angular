import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CoursesService } from "./services/courses.service";




@Injectable()
export class CourseResolveService implements Resolve<any> {

    constructor(private coursesService:CoursesService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       return this.coursesService.getAllCourses().then((data:any)=>{
        return data;
       });
    }

}