import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  componentes ="my name is nilesh";
  
  clickHandler(){
    alert("welcome Nilesh")
  }

}
