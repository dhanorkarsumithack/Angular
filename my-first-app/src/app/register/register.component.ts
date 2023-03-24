import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  frmRegister:FormGroup;
  

  constructor(private http:HttpClient){
    this.frmRegister=this.createFormGroup();
  }
  onSubmit():void {
    console.log(this.frmRegister.value);
    this.http.post(
      'http://localhost:3000/employee',
       this.frmRegister.value
       ).subscribe(data=>console.log(data)); 
  }
  createFormGroup(){
    return new FormGroup({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',Validators.required)
    });

  };
  ngOnInit(): void{

  }; 
}
