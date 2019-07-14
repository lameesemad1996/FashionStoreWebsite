import { Component, OnInit } from '@angular/core';
import { HoverEffectElement } from '../models/hover-effect-element.model';
import { HoverEffectElementService } from '../services/hover-effect-element.service';

@Component({
  selector: 'app-hover-effect-element',
  templateUrl: './hover-effect-element.component.html',
  styleUrls: ['./hover-effect-element.component.css']
})
export class HoverEffectElementComponent implements OnInit {

  constructor(private hes: HoverEffectElementService) { }

  elements: HoverEffectElement[] = [];

  ngOnInit() {
    this.elements = this.hes.getElements();
  }

}
