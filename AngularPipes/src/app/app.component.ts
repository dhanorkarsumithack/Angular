import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentService]
})
export class AppComponent implements OnInit{
  title = 'AngularPipes';
  student:Student[]=[];
  totalMarks:number=0;
  // filterText:string='';
  _filterText:string=''
  filteredStudent:Student[]=[];

  totalStudent=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(this.filteredStudent.length);  
    },5000);
  })

  get filterText(){
    return this._filterText;
  }
  set filterText(value:string){
    this._filterText=value;
    this.filteredStudent= this.filterStudentByGender(value);
  }

  constructor(private studentService:StudentService){}

  ngOnInit(){
     this.student=this.studentService.students;
     this.totalMarks=this.studentService.totalMarks;
     this.filteredStudent=this.student;
  }

  AddDummyStudent(){
    // let studentCpy=Object.assign([],this.student);
    //  studentCpy.push({name:'Test',course:'Test',marks:520,DOB:new Date(), gender:'Female'});
    //  this.student=studentCpy;
    this.student.push({name:'Test',course:'Test',marks:520,DOB:new Date(), gender:'Female'});
    this.filteredStudent= this.filterStudentByGender(this._filterText)
  }

  changeGender(){
    // let studentCpy: Student[] =Object.assign([],this.student);
    // studentCpy[0].gender='female';
    // this.student=studentCpy;
    this.student[0].gender='female';
    this.filteredStudent=this.filterStudentByGender(this._filterText)
  }

  onMouseMove(){

  }

  filterStudentByGender(filterTerm:string){
    console.log("filter pipe is called");
        if(this.student.length === 0 || this.filterText ===''){
            return this.student;
        }else{
            return this.student.filter((student)=>{
                return student.gender.toLowerCase() === filterTerm.toLowerCase()
            })
        }
  }

}
