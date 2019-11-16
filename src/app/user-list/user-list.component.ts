import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {

  userList : User[] = []; 

  constructor(private data: DataService) {
    
    this.userList = data.getAllUsers(); 
    console.log("user list has ", this.userList.length);

  }

 

}
