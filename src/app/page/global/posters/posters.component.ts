import { Component, Input, OnInit } from '@angular/core';
import { Posters } from '../models/cytokeratin-model';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss'],
})
export class PostersComponent implements OnInit {
  @Input() public posters!: Posters;
  public showPrice: boolean;

  constructor() {
    this.showPrice = false;
  }

  ngOnInit(): void {}
  showHide() {
    this.showPrice = true;
  }
  hideShow() {
    this.showPrice = false;
  }
}
