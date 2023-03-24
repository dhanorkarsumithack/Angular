import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
  
})
export class AllUsersComponent implements OnInit{
  constructor(private userService:UserService){}
   users: {name:string,job:string,gender:string, country:string,age:number,avatar:string}[]=[];
  ngOnInit(){
    this.users=this.userService.user;
  }

  showDetails(user:{name:string,job:string,gender:string, country:string,age:number,avatar:string}){
    this.userService.showUserDetails(user);

  }
}
