import { Injectable } from '@angular/core';
import { trendingBlock } from '../models/trendingBlock.model';

@Injectable({
  providedIn: 'root'
})
export class TrendingBlockService {

  constructor() { }

  getBlocks()
  {
    let tb1: trendingBlock = new trendingBlock;
    
    
    tb1.horizontal1.elementId = 1;
    tb1.horizontal1.firstText = "Sale";
    tb1.horizontal1.secondText = "Up to 55%";
    tb1.horizontal1.imgsrc = "../../assets/images/bottom3.jpg";

    tb1.horizontal2.elementId = 2;
    tb1.horizontal2.firstText = "Sale";
    tb1.horizontal2.secondText = "Up to 65%";
    tb1.horizontal2.imgsrc = "../../assets/images/bottom4.jpg";

    tb1.vertical.elementId = 3;
    tb1.vertical.firstText = "Sale";
    tb1.vertical.secondText = "Up to 55%";
    tb1.vertical.imgsrc = "../../assets/images/bb1.jpg";

    tb1.routerLinkH1 = "mens-wear";
    tb1.routerLinkH2 = "mens-wear";
    tb1.routerLinkV = "womens-wear";

    let blocks: trendingBlock[] = [];
    blocks.push(tb1);

    return blocks;
        
  }
}


