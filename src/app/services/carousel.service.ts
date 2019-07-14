import { Injectable } from '@angular/core';
import { CarouselBanner } from '../models/carousel.model';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor() { }

  getBanners()
  {
    let b1: CarouselBanner = new CarouselBanner();
    b1.bannerId = "active";
    b1.firstText = "The Biggest ";
    b1.secondText = "Sale";
    b1.thirdText = "Special for today";
    b1.routerLink = "mens-wear";
    
    let b2: CarouselBanner = new CarouselBanner();
    b2.bannerId = "item2";
    b2.firstText = "Summer ";
    b2.secondText = "Collection";
    b2.thirdText = "New Arrivals On Sale";
    b2.routerLink = "mens-wear";
    
    let b3: CarouselBanner = new CarouselBanner();
    b3.bannerId = "item3";
    b3.firstText = "The Biggest ";
    b3.secondText = "Sale";
    b3.thirdText = "Special for today";
    b3.routerLink = "mens-wear";

    let b4: CarouselBanner = new CarouselBanner();
    b4.bannerId = "item4";
    b4.firstText = "Summer ";
    b4.secondText = "Collection";
    b4.thirdText = "New Arrivals On Sale";
    b4.routerLink = "mens-wear";

    let b5: CarouselBanner = new CarouselBanner();
    b5.bannerId = "item5";
    b5.firstText = "The Biggest ";
    b5.secondText = "Sale";
    b5.thirdText = "Special for today";
    b5.routerLink = "mens-wear";

    
    let banners: CarouselBanner[] = [];
    banners.push(b1);
    banners.push(b2);
    banners.push(b3);
    banners.push(b4);
    banners.push(b5);

    return banners;
  }
}
