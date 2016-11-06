import { ModuleWithProviders, NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllItemsComponent} from './allItems.component';
import {TranscluzionComponent} from './transcluzion/transcluzion.component'

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'allItems/transcluzion', component: TranscluzionComponent },
    {
    path: 'allItems',
    component: AllItemsComponent
  }
  ])],
  exports: [RouterModule]
})
export class allItemsRoutingModule {}