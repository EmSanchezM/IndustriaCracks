import { Injectable } from '@angular/core';
//Peticiones HTTP
import { HttpClient,HttpHeaders } from '@angular/common/http';
//Manejo de Errores
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//Modelo
import { Product } from 'src/app/models/product/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_Url='http://127.0.0.1:8000/api/viewset/product/'
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.API_Url)
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  postProduct(product){
    return this.http.post<Product[]>(this.API_Url, JSON.stringify(product),this.httpOptions)
  }
}
