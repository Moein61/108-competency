import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent  {

  userList: User[] = []; 

  userName: string = '';
  password: string = '';

  userNameError = false; 
  passwordError = false; 
  loginFailed= false;

  constructor(private data:DataService, private router: Router, private shared: SharedService) {
    this.userList= this.data.getAllUsers(); 
   }

  userChanged(){
    if(this.userName) this.userNameError=false;
    else this.userNameError=true; 
  }

  passwordChanged(){
    if(this.password) this.passwordError=false;
    else this.passwordError=true; 
  }

  

  login() {


    var missingInfo = false;
    if (!this.userName) {
      this.userNameError=true;
      missingInfo = true;
    }
    else {
      this.userNameError= false;
    }

    if (!this.password) {
      this.passwordError=true; 
      missingInfo= true; 
    }
    else {
      this.passwordError=false; 
    }
     if (missingInfo) return; 

     var credsCorrect = false; 

     for (var i=0; i<this.userList.length; i++){
       var user=this.userList[i];

       if (user.userName==this.userName && user.password == this.password){
         console.log('the user is loged in correctly');
         credsCorrect = true;  
         this.loginFailed=false;
         this.shared.isUserLoggedIn=true; 
         this.router.navigate(['User/new']);  
       }

     }

     if (!credsCorrect) {

      console.log("credential is incorrect");
      this.loginFailed=true;
     }
  }

  

}
