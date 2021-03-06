import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Now} from "../now";

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.css']
})
export class NowComponent implements OnInit {

  DayOfWeek: string = '';
  hour: number = 0;
  stores: number[] = [];
  message: string = ''
  RECOMMENDATIONS: Now = {
    'Sun': {
      9: [7, 11, 5],
      10: [11, 5, 3],
      11: [5, 11, 3],
      12: [5, 11, 3],
      13: [11, 5, 3],
      14: [11, 3, 2],
      15: [2, 3, 11],
      16: [3, 6, 2],
      17: [11, 6, 2],
      18: [11, 9, 8],
      19: [9, 8, 11]
    },
    'Mon': {
      9: [7, 11, 6],
      10: [7, 6, 8],
      11: [6, 7, 8],
      12: [6, 3, 5],
      13: [1, 3, 6],
      14: [1, 11, 4],
      15: [4, 2, 6],
      16: [2, 6, 7],
      17: [7, 6, 10],
      18: [7, 3, 9],
      19: [11, 3, 7]
    },
    'Tue': {
      9: [7, 11, 4],
      10: [11, 5, 6],
      11: [5, 6, 4],
      12: [4, 5, 6],
      13: [4, 10, 6],
      14: [10, 4, 6],
      15: [6, 3, 5],
      16: [6, 2, 5],
      17: [9, 11, 2],
      18: [9, 11, 8],
      19: [9, 11, 3]
    },
    'Wed': {
      9: [7, 11, 6],
      10: [7, 6, 4],
      11: [7, 6, 4],
      12: [7, 8, 6],
      13: [11, 8, 7],
      14: [11, 7, 9],
      15: [4, 5, 11],
      16: [5, 4, 9],
      17: [9, 11, 5],
      18: [11, 9, 3],
      19: [4, 11, 8]
    },
    'Thu': {
      9: [7, 11, 3],
      10: [11, 7, 3],
      11: [3, 11, 7],
      12: [3, 8, 11],
      13: [3, 6, 8],
      14: [3, 6, 8],
      15: [3, 6, 8],
      16: [3, 8, 6],
      17: [9, 11, 5],
      18: [9, 11, 5],
      19: [11, 9, 5]
    },
    'Fri': {
      9: [7, 11, 6],
      10: [7, 11, 3],
      11: [3, 7, 11],
      12: [3, 5, 8],
      13: [3, 5, 8],
      14: [3, 8, 5],
      15: [3, 6, 8],
      16: [9, 6, 11],
      17: [11, 5, 6],
      18: [11, 5, 3],
      19: [9, 11, 5]
    },
    'Sat': {
      9: [7, 11, 3],
      10: [11, 3, 7],
      11: [11, 3, 10],
      12: [11, 5, 10],
      13: [5, 6, 10],
      14: [6, 5, 3],
      15: [6, 11, 2],
      16: [11, 7, 2],
      17: [11, 8, 7],
      18: [11, 9, 5],
      19: [5, 2, 3]
    }
  }

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getParams();
    this.getStores();
  }

  getParams(): void {
    this.DayOfWeek = this.route.snapshot.paramMap.get('dayOfWeek');
    this.hour = +this.route.snapshot.paramMap.get('hour');
    const param3 = this.route.snapshot.paramMap.get('status');
    if (param3 === 'early') {
      this.message = 'Stores open at 9 am'
    }
  }

  getStores(): void {
    this.stores = this.RECOMMENDATIONS[this.DayOfWeek][this.hour];
  }

}
