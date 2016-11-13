import { ModuleWithProviders, NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RxJsExamplesComponent} from './rxJsExamples.component';
import {UpdatingDataComponent} from './updatingData/updatingData.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'rxJsExamples', component: RxJsExamplesComponent ,
   children: [
    { path: 'updatingData', component: UpdatingDataComponent }
     ]
    }
  ])],
  exports: [RouterModule]
})
export class RxJsExamplesRoutingModule {}