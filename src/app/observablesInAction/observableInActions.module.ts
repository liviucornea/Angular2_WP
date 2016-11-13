
import { NgModule, NO_ERRORS_SCHEMA}           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {RxJsExamplesComponent} from './rxJsExamples.component';
import { RxJsExamplesRoutingModule} from './rxjsExamples.Routing.Module';
import {UpdatingDataComponent} from './updatingData/updatingData.component'

 
@NgModule({
  imports: [ CommonModule, 
  FormsModule ,  RxJsExamplesRoutingModule
  ],
  declarations: [RxJsExamplesComponent, UpdatingDataComponent ],
  exports:      [RxJsExamplesComponent],
  providers:    [],
  schemas:      [ NO_ERRORS_SCHEMA ] // add this line
})
export class ObservableInActions { }