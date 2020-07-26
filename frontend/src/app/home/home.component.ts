import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent {

  description: string = "Buy grocery when most people aren't";
  dayOfWeek: string = '';
  hour: string = '';

  constructor(private router: Router, private datePipe: DatePipe) {
  }

  redirect_now() {
    this.dayOfWeek = this.datePipe.transform(new Date(), 'EEE', 'PDT')
    this.hour = this.datePipe.transform(new Date(), 'H', 'PDT')
    if (+this.hour < 9) {
      this.router.navigate(['./now/'.concat(this.dayOfWeek).concat('/').concat(String(9)).concat('/early')]);
    }
    else if (8 < +this.hour && +this.hour < 20) {
      this.router.navigate(['./now/'.concat(this.dayOfWeek).concat('/').concat(this.hour).concat('/open')]);
    } else {
      this.router.navigate(['./tomorrow/'.concat(this.dayOfWeek).concat('/closed')]);
    }
  }

  redirect_tomorrow() {
    this.dayOfWeek = this.datePipe.transform(new Date(), 'EEE', 'PDT')
    this.router.navigate(['./tomorrow/'.concat(this.dayOfWeek).concat('/early')]);
  }
}

