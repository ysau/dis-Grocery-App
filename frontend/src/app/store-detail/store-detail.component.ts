import {Component, Input, OnInit} from '@angular/core';
import {STORES} from "../store-data";

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {

  @Input() store_id: number;
  @Input() show_time: boolean;
  @Input() hour: number;
  location: string = '';
  address: string = ''
  link: string = ''

  constructor() {
  }

  ngOnInit() {
    this.location = STORES[this.store_id].location;
    this.address = STORES[this.store_id].address;
    this.link = "https://www.google.com/maps/search/?api=1&query=".concat(this.address);
  }

}
