//http://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ContactsService } from './contacts.service';

@Injectable()
export class ContactResolve implements Resolve<any> {
  
  constructor(private contactsService: ContactsService) {}
  
  resolve(route: ActivatedRouteSnapshot) {
    return this.contactsService.getContact(route.params['id']);
  }
}