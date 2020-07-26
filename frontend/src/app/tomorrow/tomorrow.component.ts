import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Tomorrow} from "../tomorrow";

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.css']
})
export class TomorrowComponent implements OnInit {

  DayOfWeek: string;
  morning_hour: string;
  morning_store_id: number;
  afternoon_hour: string;
  afternoon_store_id: number;
  evening_hour: string;
  evening_store_id: number;
  message: string = ''
  RECOMMENDATIONS: Tomorrow = {
    'Sun': {
      'morning': {'hour': 10, 'store_id': 7},
      'afternoon': {'hour': 14, 'store_id': 1},
      'evening': {'hour': 20, 'store_id': 11}
    },
    'Mon': {
      'morning': {'hour': 10, 'store_id': 11},
      'afternoon': {'hour': 15, 'store_id': 6},
      'evening': {'hour': 20, 'store_id': 3}
    },
    'Tue': {
      'morning': {'hour': 10, 'store_id': 7},
      'afternoon': {'hour': 16, 'store_id': 5},
      'evening': {'hour': 20, 'store_id': 1}
    },
    'Wed': {
      'morning': {'hour': 10, 'store_id': 11},
      'afternoon': {'hour': 14, 'store_id': 3},
      'evening': {'hour': 20, 'store_id': 11}
    },
    'Thu': {
      'morning': {'hour': 10, 'store_id': 7},
      'afternoon': {'hour': 13, 'store_id': 3},
      'evening': {'hour': 20, 'store_id': 9}
    },
    'Fri': {
      'morning': {'hour': 11, 'store_id': 11},
      'afternoon': {'hour': 14, 'store_id': 6},
      'evening': {'hour': 20, 'store_id': 2}
    },
    'Sat': {
      'morning': {'hour': 10, 'store_id': 11},
      'afternoon': {'hour': 15, 'store_id': 2},
      'evening': {'hour': 20, 'store_id': 9}
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
    const param3 = this.route.snapshot.paramMap.get('status');
    if (param3 === 'closed') {
      this.message = "Most stores are closed now.  Tomorrow' schedule"
    }
  }

  getStores(): void {
    let hour: number;
    hour = this.RECOMMENDATIONS[this.DayOfWeek]['morning']['hour'];
    this.morning_hour = `${hour} a.m.`;
    this.morning_store_id = this.RECOMMENDATIONS[this.DayOfWeek]['morning']['store_id'];
    hour = this.RECOMMENDATIONS[this.DayOfWeek]['afternoon']['hour'];
    this.afternoon_hour = `${hour - 12} p.m.`;
    this.afternoon_store_id = this.RECOMMENDATIONS[this.DayOfWeek]['afternoon']['store_id'];
    hour = this.RECOMMENDATIONS[this.DayOfWeek]['evening']['hour'];
    this.evening_store_id = this.RECOMMENDATIONS[this.DayOfWeek]['evening']['store_id'];
    this.evening_hour = `${hour - 12} p.m.`;
  }

}

