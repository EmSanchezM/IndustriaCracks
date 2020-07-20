import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthLogin } from 'src/app/models/auth/auth-login';
import { UserService } from 'src/app/services/auth/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginAuth: AuthLogin;
  public message: string;
  public status: string;

  constructor(private userService: UserService,
              private router: Router) {
    this.loginAuth = new AuthLogin(0,'','','');
   }

  ngOnInit(): void {
  }

  login(form: NgForm){
    console.log(form);
    if (form.invalid){
      return;
    }else{
      console.log(this.loginAuth);

      this.userService.loginUser(this.loginAuth)
          .subscribe(response=>{
            this.status = response['response'];
            this.message = response['error_message'];
            if( response['token']){
              /*
                Despues tiene que rediriguir a home 
                this.router.navigateByUrl('/home');
              */
              
              this.router.navigateByUrl('/perfil');
            }
          },
          error =>{
            console.log(error);
          });

    }
  }

}
