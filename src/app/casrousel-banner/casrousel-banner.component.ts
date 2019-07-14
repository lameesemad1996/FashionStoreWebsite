import { Component, OnInit, Input } from '@angular/core';
import { CarouselService } from '../services/carousel.service';
import { CarouselBanner } from '../models/carousel.model';

@Component({
  selector: 'app-casrousel-banner',
  templateUrl: './casrousel-banner.component.html',
  styleUrls: ['./casrousel-banner.component.css']
})
export class CasrouselBannerComponent implements OnInit {

  @Input() banner: CarouselBanner;

  banners: CarouselBanner[] = []

  constructor(private cs: CarouselService) { }

  ngOnInit() {
    
    this.banners = this.cs.getBanners();
    //console.log(this.banners);
  }

}
