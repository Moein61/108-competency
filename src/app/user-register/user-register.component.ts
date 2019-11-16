import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  model: User = new User();
  retypePassword: string;
  userNameError = false;
  passwordError = false;
  passMatchError= false;  
  emailError= false; 


  constructor(private data: DataService) { }

  ngOnInit() {}

  userValueChanged(){
    if (this.model.userName.length > 3){
      this.userNameError=false; 
    }
    else{
      this.userNameError=true; 
    }
  }

  passwordChanged (){
    this.passwordError=this.model.password.length < 6 ; 
    this.passMatchError= this.model.password != this.retypePassword ;
  }

  emailChange() {
    
    if(this.model.email.length < 8 || !this.model.email.includes('@') ) {

      this.emailError=true; 

    }
     
  }

  registerUser (){

    
    console.log("the user want to save another user");
    console.log(this.model);

    var isThereAnError=false;

    if (!this.model.userName) {
      this.userNameError=true;
      isThereAnError=true;
    }

    if (!this.model.password){
      this.passwordError= true; 
      isThereAnError=true; 
    }

    if (!this.model.email){
      this.emailError= true; 
      isThereAnError=true; 
    }

    if (isThereAnError || this.passMatchError){
      return; 
    }

    this.data.saveUser(this.model);

    //create a new one
    //so user can create more users

    this.model = new User(); 
    this.retypePassword= "";
  }
  

}
