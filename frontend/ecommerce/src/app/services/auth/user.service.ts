import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

/*Modelo*/
import {User} from '../../models/auth/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public URL:string; 

  constructor(private http: HttpClient) {
    this.URL = 'https://localhost:8000/api/auth/';
  }

  RegisterUser(user: User): Observable<any>{
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.URL+'register', params, {headers: headers});

  }
}
