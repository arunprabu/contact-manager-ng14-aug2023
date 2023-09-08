import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: []
})
export class AddContactComponent implements OnInit {
  // Step 1: Have the ts equivalent for the html form tag using FormGroup
  addContactForm!: FormGroup;

  constructor() {
    // Step 1 continues ....
    this.addContactForm = new FormGroup({
      // Step 2: Have the ts equivalent for the html form elements
      name: new FormControl('', Validators.required), // Step 5: setup validator
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]) 
    });
  }

  ngOnInit(): void {}

  addContact() {
    console.log(this.addContactForm);
  }
}
