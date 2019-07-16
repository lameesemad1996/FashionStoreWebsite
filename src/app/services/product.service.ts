import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts()
  {
    let p1: Product = new Product;
    p1.productId = 1;
    p1.imgsrc = "../../assets/images/m1.jpg"
    p1.oldPrice = 69.71;
    p1.newPrice = 45.99;
    p1.name = "Formal Blue Shirt";

    let p2: Product = new Product;
    p2.productId = 2;
    p2.imgsrc = "../../assets/images/m2.jpg"
    p2.oldPrice = 69.71;
    p2.newPrice = 45.99;
    p2.name = "Gabi Full Sleeve Sweatshirt";

    let p3: Product = new Product;
    p3.productId = 3;
    p3.imgsrc = "../../assets/images/m3.jpg"
    p3.oldPrice = 89.71;
    p3.newPrice = 80.99;
    p3.name = "Dark Blue Track Pants";

    let p4: Product = new Product;
    p4.productId = 4;
    p4.imgsrc = "../../assets/images/m4.jpg"
    p4.oldPrice = 69.71;
    p4.newPrice = 45.99;
    p4.name = "Round Neck Black T-Shirt";

    let p5: Product = new Product;
    p5.productId = 5;
    p5.imgsrc = "../../assets/images/m5.jpg"
    p5.oldPrice = 69.71;
    p5.newPrice = 45.99;
    p5.name = "Men's Black Jeans";


    let products: Product[] = [];
    products.push(p1);
    products.push(p2);
    products.push(p3);
    products.push(p4);
    products.push(p5);

    return products;
  }

}
