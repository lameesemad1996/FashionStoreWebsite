import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {

  constructor(private ps: ProductService) { }

  mensproducts: Product[] = [];
  womensproducts: Product[] = [];
  bagsproducts: Product[] = [];
  footwearproducts: Product[] = [];

  ngOnInit() {
    this.mensproducts = this.ps.getMensProducts();
    // this.womensproducts = this.ps.getWomensProducts();
    // this.bagsproducts = this.ps.getBagsProducts();
    // this.footwearproducts = this.ps.getFootwearProducts();

  } 

}
