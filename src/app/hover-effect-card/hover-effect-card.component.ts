import { Component, OnInit, Input } from '@angular/core';
import { HoverEffectElement } from '../models/hover-effect-element.model';

@Component({
  selector: 'app-hover-effect-card',
  templateUrl: './hover-effect-card.component.html',
  styleUrls: ['./hover-effect-card.component.css']
})
export class HoverEffectCardComponent implements OnInit {


  @Input() element: HoverEffectElement;

  constructor() { }

  ngOnInit() {
  }

}
