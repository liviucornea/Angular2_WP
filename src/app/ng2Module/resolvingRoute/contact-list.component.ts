//http://blog.thoughtram.io/angular/2016/10/10/resolving-route-data-in-angular-2.html
import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'contacts-list',
  template:  require('./contact-List.html'),
  styleUrls: ['./contact-list.css']
})
export class ContactsListComponent implements OnInit {
  
  contacts: any[];
  
  constructor(private contactsService: ContactsService) {}
  
  ngOnInit() {
    var self = this;

  self.contacts = self.contactsService.getContacts();

    
  
}
}