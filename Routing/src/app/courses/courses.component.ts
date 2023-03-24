import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
   courses:any;
   constructor(private coursesService:CoursesService,private route:ActivatedRoute){}
   
  ngOnInit(): void {
    // this.courses=this.service.courses;
    // this.coursesService.getAllCourses().then((data: any)=>{
    //   this.courses=data;
    // });
    this.courses=this.route.snapshot.data['courses'];

  }

}
