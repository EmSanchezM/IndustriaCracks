import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
