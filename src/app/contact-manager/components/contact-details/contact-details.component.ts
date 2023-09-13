import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactsService: ContactsService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const contactId = this.activateRoute.snapshot.paramMap.get('id'); 

    this.contactsService.getContactById(contactId).subscribe((res: any) => {
      console.log(res);
    });
  }

}
