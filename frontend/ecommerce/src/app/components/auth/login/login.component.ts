import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nombre = '';
  contrasenia = '';

  inicio(){
    if ( this.nombre === 'isaac' || this.contrasenia === '1234'){
      
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
