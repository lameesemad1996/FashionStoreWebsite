import { Component, OnInit, Input } from '@angular/core';
import { OffersBanner } from '../models/offers-banner.model';

@Component({
  selector: 'app-offers-banner',
  templateUrl: './offers-banner.component.html',
  styleUrls: ['./offers-banner.component.css']
})
export class OffersBannerComponent implements OnInit {

  @Input() banner: OffersBanner;

  constructor() { }

  ngOnInit() {
  }

}
