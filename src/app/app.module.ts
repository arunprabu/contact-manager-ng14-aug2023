import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuListComponent } from './shared/components/menu-list/menu-list.component';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { ContactListComponent } from './contact-manager/components/contact-list/contact-list.component';
import { AboutComponent } from './about/components/about/about.component';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuListComponent,
    HomeComponent,
    ConceptsComponent,
    ContactListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // AppModule bootstrapped with a comp -- AppComp
})
export class AppModule { }
