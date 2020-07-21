import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductsService } from 'src/app/services/products/products.service'
import { Router } from '@angular/router';
import { Category } from 'src/app/models/product/category';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input() product: Product
  @Input() productDetail =  {name:'', description:'', price:0, category_id:0,user_id:0}

  categories: Category[];

  constructor(private dataService:ProductsService,public router:Router) { }

  ngOnInit() {
    console.log(this.product)
    return this.dataService.getCategories()
      .subscribe(data =>this.categories=data) 
  }

  updateproduct(id) {
    console.log("Actualizando")
    this.dataService.putProduct(id,this.productDetail)
      .subscribe((data: {}) => {
        this.router.navigate(['/my_products'])
      })
  }
}
