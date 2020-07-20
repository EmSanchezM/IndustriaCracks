import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service'
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Input() productDetail =  {name:'', description:'',price:""}
  constructor(private dataService:ProductsService,public router:Router) { }

  ngOnInit(): void {
  }

  addproduct(data) {
    console.log("Creando")
    this.dataService.postProduct(this.productDetail)
      .subscribe((data: {}) => {
        this.router.navigate(['/my_products'])
      })
  }
}
