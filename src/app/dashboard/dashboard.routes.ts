import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }];
  export default RouterModule.forChild(routes) 