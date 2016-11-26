import { ModuleWithProviders, NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllItemsComponent} from './allItems.component';
import {TranscluzionComponent} from './transcluzion/transcluzion.component';
import {ContactsListComponent} from './resolvingRoute/contact-list.component';
import {ContactsDetailComponent} from './resolvingRoute/contact-detail.component';
import {ContactResolve} from './resolvingRoute/contact.resolve';
//liviu ...please note when you use resolve for ruting :see the comment in contacts.service

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'allItems', component: AllItemsComponent ,
    children: [  { path: 'transcluzion', component: TranscluzionComponent } ,
    {path: 'contactList', component: ContactsListComponent},
     { path: 'contactList', component: ContactsListComponent,
             children: [ { path: 'contact/:id', component: ContactsDetailComponent
            , resolve: {contact: ContactResolve  }
          }
    ]  
            }
    ]
    }
  ])],
  exports: [RouterModule]
})
export class allItemsRoutingModule {}