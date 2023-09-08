import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {
  // Step 1: Have the ts equivalent for the html form tag using FormGroup
  addContactForm!: FormGroup;
  isSaved = false;

  constructor( private contactService: ContactsService ) {
    // Step 1 continues ....
    this.addContactForm = new FormGroup({
      // Step 2: Have the ts equivalent for the html form elements
      name: new FormControl('arun', Validators.required), // Step 5: setup validator
      phone: new FormControl('342567667', Validators.required),
      email: new FormControl('a@g.com', [Validators.required, Validators.email]) 
    });
  }

  ngOnInit(): void {}

  addContact() {
    console.log(this.addContactForm.value); // submittable form data
    // 1. connect to the service class using dep injection (DI)
    // 2. send the above data to the service class 
    this.contactService.addContact(this.addContactForm.value)
      .subscribe((res: any) => {
        // 3. get the res from the service class
        console.log(res);
        this.isSaved = true;
      });
  }
}
