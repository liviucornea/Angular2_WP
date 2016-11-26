//http://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ContactsService } from './contacts.service';

@Injectable()
export class ContactResolve implements Resolve<any> {
  
  constructor(private contactsService: ContactsService) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    //return  { id: 1, name: 'Pascal Precht', twitter: '@PascalPrecht' };
    // pls not that if you return an observable that should be complete otherwise
    // routing will not considering like having data and will not render apropriate component
    // see the comments in contacts service as well
    return this.contactsService.getContact(route.params['id']);


  }
}