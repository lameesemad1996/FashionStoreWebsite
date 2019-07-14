import { Injectable } from '@angular/core';
import { HoverEffectElement } from '../models/hover-effect-element.model';

@Injectable({
  providedIn: 'root'
})
export class HoverEffectElementService {

  constructor() { }

  getElements()
  {
    let e1: HoverEffectElement = new HoverEffectElement();
    e1.elementId = 1;
    e1.firstText = "FALL AHEAD";
    e1.secondText = "New Arrivals";
    e1.imgsrc = "../../assets/images/bottom1.jpg";
    
    let e2: HoverEffectElement = new HoverEffectElement();
    e2.elementId = 1;
    e2.firstText = "FALL AHEAD";
    e2.secondText = "New Arrivals";
    e2.imgsrc = "../../assets/images/bottom2.jpg"
    
    
    let elements: HoverEffectElement[] = [];
    elements.push(e1);
    elements.push(e2);

    return elements;
  }
}
