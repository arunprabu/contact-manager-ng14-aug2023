import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  template: `
    <ul class="navbar-nav flex-grow-1">
      <li class="nav-item">
        <a class="nav-link" routerLink="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/concepts">Concepts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/contact-manager">Contact Manager App</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/about">About</a>
      </li>
      <ng-content></ng-content>
    </ul>
  `,
  styles: [
  ]
})
export class MenuListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
