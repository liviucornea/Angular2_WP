//this is feature module , just to show
// how you can group parts of your application in one module
// note that NO_ERRORS_SCHEMA  is imported to handle Unhandled Promise rejection:
// Template parse errors: 'card-body' is not a known element
// see this : https://scotch.io/tutorials/angular-2-transclusion-using-ng-content
import { NgModule, NO_ERRORS_SCHEMA}           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { HighlightDirective } from './directive/highlight.directive';
import {AllItemsComponent} from './allItems.component';
import {TranscluzionComponent} from './transcluzion/transcluzion.component';
import {CardComponent} from './transcluzion/card.component';
import {allItemsRoutingModule} from './allItems.routing.module';

@NgModule({
  imports: [ CommonModule, 
  FormsModule ,
  allItemsRoutingModule
  ],
  declarations: [  HighlightDirective , TranscluzionComponent,  AllItemsComponent, CardComponent],
  exports:      [AllItemsComponent],
  providers:    [ ],
  schemas:      [ NO_ERRORS_SCHEMA ] // add this line
})
export class ng2Module { }