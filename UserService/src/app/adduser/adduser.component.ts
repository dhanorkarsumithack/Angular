import { outputAst } from '@angular/compiler';
import { Component, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  // providers:[UserService]
})
export class AdduserComponent {
  username:string='';
  status:string='active';

  constructor(private userService:UserService){}

  AddUser(){
    this.userService.AddNewUser(this.username,this.status);
    // console.log(this.userService.users);
    
  }



}
