import { Component, OnInit, Input } from '@angular/core';
import { trendingBlock } from '../models/trendingBlock.model';
import { TrendingBlockService } from '../services/trending-block.service';
import { TrendingBlockComponent } from '../trending-block/trending-block.component';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  constructor(private tbs: TrendingBlockService) { }

  blocks: trendingBlock[] = []; 

  
  ngOnInit() {
    this.blocks = this.tbs.getBlocks();
  }

}
