import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WikiSearchComponent} from './wikipediaSearch/wikisearch.component';
import {AnimationComponent} from './animation/animation.component'
import { routing }              from './app.routing';
import { HttpModule, JsonpModule} from '@angular/http';
import {WikipediaSearchService} from './wikipediaSearch/WikipediaSearchService'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WikiSearchComponent,
    AnimationComponent
  ],
   providers: [ WikipediaSearchService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }