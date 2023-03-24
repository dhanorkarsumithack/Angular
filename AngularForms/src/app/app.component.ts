import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';
  defaultCountry:string='';
  firstname:string='';
  lastname:string='';
  email:any;
  gen:any;
  country:any;
  
  defaultGender='other';


  gender=[
    {
      id:1,
      value:'male'
    },
    {
      id:2,
      value:'female'
    },
    {
      id:3,
      value:'other'
    }
  ]

  @ViewChild('myForm') form:NgForm | undefined;
  onSubmit(){
    console.log(this.form);
    this.firstname=this.form?.value.personDetails.firstname;
    this.lastname=this.form?.value.personDetails.lastname;
    this.email=this.form?.value.personDetails.email;
    this.gen=this.form?.value.gender;
    this.country=this.form?.value.country;

    this.form?.reset();
  }

  setDefalultValues(){
    if (this.form?.value?.personDetails) {
      // this.form.value.personDetails.firstname='Sam';
      // this.form.value.personDetails.lastname='dane';
      // this.form.value.personDetails.email='abc@example.com';

      // using setvalue
      this.form.setValue({
        country:'',
        gender:'',
        hobbies:'',
        personDetails:{
          firstname:'john',
          lastname:'smith',
          email:'abc@example.com'
        }
      })

      //using patch value
      // this.form.form.patchValue({
      //      personDetails:{
      //       firstname:'john',
      //       lastname:'smith',
      //       email:'abc@example.com'
      //      }
      // })

    }
  }
}
