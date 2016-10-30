import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WikiSearchComponent} from './wikipediaSearch/wikisearch.component';
import {AnimationComponent} from './animation/animation.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
   {
    path: 'animation',
    component: AnimationComponent
  }  ,
  {
    path: 'wikisearch',
    component: WikiSearchComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

