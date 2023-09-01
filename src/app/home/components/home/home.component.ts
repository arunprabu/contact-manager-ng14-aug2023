import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h1>Welcome to Home Page!</h1>
      <button class="btn btn-primary" routerLink="/contact-manager">
        Go to Contact Manager
      </button>
      <!-- the above routerLink is valid -->
    </div>
  `,
  styles: [
    `
      .highlighter {
        background-color: red;
      }
    `
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
