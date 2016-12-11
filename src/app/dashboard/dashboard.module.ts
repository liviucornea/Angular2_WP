import { NgModule, NO_ERRORS_SCHEMA}           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {TestChildComponent} from './test.child.component'
import dashboardRoutes from './dashboard.routes';

@NgModule({
  imports: [ CommonModule,  FormsModule, dashboardRoutes
  ],
  declarations: [],
  providers:    [],
  schemas:      [ NO_ERRORS_SCHEMA ] // add this line
})
export class dashboardModule { }