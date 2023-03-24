import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForms';

  reactiveForm:FormGroup;
  formstatus;

  ngOnInit(){
    this.reactiveForm=new FormGroup({
      personalDetails: new FormGroup({
        firstname:new FormControl(null,[Validators.required,this.noSpaceAllowed]),
        lastname:new FormControl(null,[Validators.required,this.noSpaceAllowed]),
        email:new FormControl(null,[Validators.required,Validators.email]),
      }),
      gender:new FormControl('male'),
      country:new FormControl('india'),
      hobbies:new FormControl(null),
      skills:new FormArray([
        new FormControl(null,Validators.required),
        // new FormControl(null,Validators.required),
        // new FormControl(null,Validators.required),
        // new FormControl(null,Validators.required)
      ])
    })
    // value changes event
    // this.reactiveForm.get('personalDetails.firstname').valueChanges.subscribe((value)=>{
    //   console.log(value);
       
    // })
    // value changes
    // this.reactiveForm.valueChanges.subscribe((value)=>{
    //   console.log(value);
      
    // })


    // status changes
    this.reactiveForm.statusChanges.subscribe((value)=>{
      console.log(value);
      this.formstatus=value;
    }) 

    setTimeout(() => {
      // this.reactiveForm.setValue({
      //   personalDetails:{
      //     firstname:'',
      //     lastname:'',
      //     email:'abc@example.com'
      //   },
      //   gender:'',
      //   country:'',
      //   hobbies:'',
      //   skills:[]
      // })

      this.reactiveForm.patchValue({
        personalDetails:{
          email:'abc@example.com'
        }
      })
    }, 4000);   
  }

  onSubmit(){
    console.log(this.reactiveForm);
    this.reactiveForm.reset({
          personalDetails:{
          firstname:'',
          lastname:'',
          email:''
        },
        gender:'male',
        country:'india',
        hobbies:'',
        skills:[]
    });
  }

  addSkills(){
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null,Validators.required));
  }

  noSpaceAllowed(control:FormControl){
    if(control.value!=null && control.value.indexOf(' ')!=-1){
      return {noSpaceAllowed:true};
    }
    return null;
  }

  emailNotAllowed(control:FormControl):Promise<any> | Observable<any> {
     const response=new Promise((resolve,reject)=>{
      setTimeout(() => {
        if(control.value === 'sumit@gmail.com'){
          resolve({emailNotAllowed:true})
        }else{
          resolve(null);
        }
      }, 1000);
     })
     return response;
  }
}
