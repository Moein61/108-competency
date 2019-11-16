import { Injectable } from '@angular/core';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: User[] = [];

  constructor() {
    var user=new User();
    user.userName="admin"; 
    user.password="123456";
    this.users. push(user);  
   }

  public sayHello(){
    console.log('Hello from the service');
  }

  public saveUser(theNewUser){

    this.users.push(theNewUser);

  }

  public getAllUsers(){
    return this.users;
  }


}
