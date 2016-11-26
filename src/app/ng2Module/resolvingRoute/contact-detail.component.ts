import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'contacts-detail',
  templateUrl: './contact-detail.html'
  
})
export class ContactsDetailComponent implements OnInit {
  
  contact: any;
  
  constructor(private contactsService: ContactsService, private route: ActivatedRoute) {}
  
  ngOnInit() {
   this.contact = this.route.snapshot.data['contact'];
  // this.contact = this.contactsService.getDelayedContact(this.route.snapshot.params['id']);
   /* 
    this.contactsService.getContact(this.route.snapshot.params['id'])
        .subscribe((contact:any) => 
        {    this.contact = contact;       });
    */
 }

}