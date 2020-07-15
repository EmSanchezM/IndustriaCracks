import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {User} from '../../../models/auth/user';
import {UserService} from '../../../services/auth/user.service';
import { formatCurrency } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public user: User; 
  public registerUser: string;
  public status: string; 

  constructor(private userService:UserService, private router: Router) {
    this.user = new User(0,'','','','','','','');
  }

  ngOnInit(): void {
  }

  onRegister(registerForm){
    this.userService.RegisterUser(this.user)
                    .subscribe(
                      response => {
                        console.log(response);
                        if(response.user){
                          this.registerUser = response.user;
                          this.status = 'Registro exitoso';
                          console.log(this.status);
                          registerForm.reset();
                          this.router.navigate(['/login']);
                        }else{
                          this.status = 'Fallo el registro';
                          console.log(this.status);

                        }
                      },
                      error =>{console.log(<any>error);}
                    );

  }
}
