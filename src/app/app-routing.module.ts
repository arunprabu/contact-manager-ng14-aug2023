import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { ContactListComponent } from './contact-manager/components/contact-list/contact-list.component';
import { AboutComponent } from './about/components/about/about.component';

// Config the routes for the app
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'contact-manager', component: ContactListComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // registering the routes
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
