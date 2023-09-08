import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerRoutingModule } from './contact-manager-routing.module';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactListComponent,
    AddContactComponent,
    ContactDetailsComponent
  ],
  imports: [CommonModule, ContactManagerRoutingModule, ReactiveFormsModule]
})
export class ContactManagerModule {}
