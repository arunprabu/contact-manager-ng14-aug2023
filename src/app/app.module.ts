import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuListComponent } from './shared/components/menu-list/menu-list.component';
import { HomeComponent } from './home/components/home/home.component';
import { ConceptsComponent } from './concepts/components/concepts/concepts.component';
import { AboutComponent } from './about/components/about/about.component';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './concepts/components/user-info/user-info.component';
import { ReportsComponent } from './concepts/components/reports/reports.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { ContactManagerModule } from './contact-manager/contact-manager.module';
import { HttpClientModule } from '@angular/common/http';

// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuListComponent,
    HomeComponent,
    ConceptsComponent,
    AboutComponent,
    UserInfoComponent,
    ReportsComponent,
    ColorizerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ContactManagerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent] // AppModule bootstrapped with a comp -- AppComp
})
export class AppModule {}
