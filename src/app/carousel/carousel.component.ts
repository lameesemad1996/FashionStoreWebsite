import { Component, OnInit, Input } from '@angular/core';
import { CarouselService } from '../services/carousel.service';
import { CasrouselBannerComponent } from '../casrousel-banner/casrousel-banner.component';
import { CarouselBanner } from '../models/carousel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
