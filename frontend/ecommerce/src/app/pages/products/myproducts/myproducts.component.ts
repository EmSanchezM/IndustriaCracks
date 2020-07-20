import { Component, OnInit } from '@angular/core';
import {Product} from 'src/app/models/product/product';
import { ProductsService } from 'src/app/services/products/products.service'

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})

export class MyproductsComponent implements OnInit {
  nombre_producto = 'Producto de Ejemplo';
  descripcion_producto = 'Este es un Producto de Ejemplo';
  imagen_producto = 'assets/img/example.jpg';
  precio = '5';
  moneda = 'Varas'
  //Modelo
  products:Product[];
  
  //Llamar al servicio
  constructor(private dataService:ProductsService ) { }

  ngOnInit(){
    return this.dataService.getProducts()
      .subscribe(data =>this.products=data) 
  }

}