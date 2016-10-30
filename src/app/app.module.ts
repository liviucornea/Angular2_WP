import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WikiSearchComponent} from './wikipediaSearch/wikisearch.component';
import {AnimationComponent} from './animation/animation.component'
import { routing }              from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
     routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WikiSearchComponent,
    AnimationComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }