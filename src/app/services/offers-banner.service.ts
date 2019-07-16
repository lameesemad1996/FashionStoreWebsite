import { Injectable } from '@angular/core';
import { OffersBanner } from '../models/offers-banner.model';

@Injectable({
  providedIn: 'root'
})
export class OffersBannerService {
  
  constructor() { }

  getTheBanner()
  {
      let banner: OffersBanner = new OffersBanner;
      
      banner.offerPercentage1 = 50;
      banner.offerPercentage2 = 50;

      banner.imgsrc1 = "../../assets/images/bot_1.jpg";
      banner.imgsrc2 = "../../assets/images/bot_2.jpg";

      banner.routerLink1 = "womens-wear";
      banner.routerLink1 = "mens-wear";
      
      return banner;
  }
}
