import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactDetailsComponent } from './components/contact-details/contact-details.component';

// config child routes
const routes: Routes = [
  { path: 'contact-manager', component: ContactListComponent },
  { path: 'contact-manager/add', component: AddContactComponent },
  { path: 'contact-manager/:id', component: ContactDetailsComponent } // id -- is the URL Param
]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // registering routes
  ],
  exports: [
    RouterModule
  ]
})
export class ContactManagerRoutingModule { }
