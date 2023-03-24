import { Component,OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit{
  title = 'UserService';
  users: {name:string,status:string}[]=[];

  constructor(private userService:UserService,private loggerService:LoggerService){
    
  }
  ngOnInit(): void {
    this.users=this.userService.users;
    console.log(this.users);
    
  }
}
