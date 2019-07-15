import { Component, OnInit } from '@angular/core';
import { OffersBanner } from '../models/offers-banner.model';
import { OffersBannerService } from '../services/offers-banner.service';

@Component({
  selector: 'app-offers-banner-display',
  templateUrl: './offers-banner-display.component.html',
  styleUrls: ['./offers-banner-display.component.css']
})
export class OffersBannerDisplayComponent implements OnInit {

  constructor(private obs: OffersBannerService) { }

  banner: OffersBanner = new OffersBanner;

  ngOnInit() {
    this.banner = this.obs.getTheBanner();
  }

}
