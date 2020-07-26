import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {NowComponent} from "./now/now.component";
import {TomorrowComponent} from "./tomorrow/tomorrow.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'now/:dayOfWeek/:hour/:status', component: NowComponent},
  {path: 'tomorrow/:dayOfWeek/:status', component: TomorrowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
