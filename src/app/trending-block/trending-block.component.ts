import { Component, OnInit, Input } from '@angular/core';
import { trendingBlock } from '../models/trendingBlock.model';

@Component({
  selector: 'app-trending-block',
  templateUrl: './trending-block.component.html',
  styleUrls: ['./trending-block.component.css']
})
export class TrendingBlockComponent implements OnInit {

  @Input() thisblock: trendingBlock;

  constructor() { }

  ngOnInit() {
  }

}
