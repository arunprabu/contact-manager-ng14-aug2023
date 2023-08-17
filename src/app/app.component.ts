import { Component } from '@angular/core';

// Decorator
@Component({
  selector: 'app-root', // exposed in an element selector -- must
  templateUrl: './app.component.html', // html -- should be only one -- must
  styleUrls: ['./app.component.css'] // css - can be many -- optional
})
export class AppComponent {
  // ts
  title = 'contact-manager-ng14-aug2023';
}
