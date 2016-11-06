import { ModuleWithProviders, NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {WikiSearchComponent} from './wikipediaSearch/wikisearch.component';
import {AnimationComponent} from './animation/animation.component';
import {AllItemsComponent} from './ng2Module/allItems.component'

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
  },
   {
    path: 'allItems',
    component: AllItemsComponent
  }
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
