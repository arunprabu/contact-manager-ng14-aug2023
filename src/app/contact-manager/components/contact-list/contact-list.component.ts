import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styles: []
})
export class ContactListComponent implements OnInit {
  contacts!: any[];
  
  constructor( private contactsService: ContactsService) {
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // whenever the comp is coming into view -- this will be called
    // ideal place for you hit rest api
    this.contactsService.getContacts()
      .subscribe((res: any) => {
        console.log(res);
        this.contacts = res;
      }); 
  }


}
