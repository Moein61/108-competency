import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP';

  name= "Moein";

  test(){

    console.log("Ohh no, You clicked me!!");
    this.name ="Changed";
  }
}
