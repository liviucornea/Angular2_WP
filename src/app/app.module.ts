import { NgModule} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WikiSearchComponent} from './wikipediaSearch/wikisearch.component';
import {AnimationComponent} from './animation/animation.component'
import { AppRoutingModule }              from './app.routing.module';
import { HttpModule, JsonpModule} from '@angular/http';
import {WikipediaSearchService} from './wikipediaSearch/WikipediaSearchService'
// ng2Module is an example of custom module in Angular 2;
import {ng2Module} from './ng2Module/ng2Module.module';
import {ObservableInActions} from './observablesInAction/observableInActions.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ObservableInActions,
    ng2Module,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WikiSearchComponent,
    AnimationComponent
  ],
   providers: [ WikipediaSearchService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }