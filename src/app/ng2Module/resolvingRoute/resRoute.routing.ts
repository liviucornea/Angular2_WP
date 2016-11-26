import { ModuleWithProviders, NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ContactsListComponent} from './contact-list.component';
import {ContactsDetailComponent} from './contact-detail.component';
@NgModule({
  imports: [RouterModule.forChild([
    {  path: 'contactList', component: ContactsListComponent ,
    children: [ { path: 'contact/:id', component: ContactsDetailComponent }
    ]
    }
  ])],
  exports: [RouterModule]
})
export class resRoutRoutingModule {}