import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  template: `
    <ul class="navbar-nav flex-grow-1">
      <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Concepts</a></li>
      <li class="nav-item"><a class="nav-link" href="#">Contact Manager App</a></li>
      <li class="nav-item"><a class="nav-link" href="#">About</a></li>
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
