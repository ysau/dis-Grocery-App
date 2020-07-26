import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import {NowComponent} from './now/now.component';
import {TomorrowComponent} from './tomorrow/tomorrow.component';
import {StoreDetailComponent} from './store-detail/store-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    NowComponent,
    TomorrowComponent,
    StoreDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
