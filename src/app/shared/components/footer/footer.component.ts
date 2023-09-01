import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr />
      <app-menu-list>
        <!-- content projection -->
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu-list>
      <p class="highlighter">&copy; Copyright 2023 | Arun</p>
    </footer>
  `,
  styles: [
    // component specific styles till you have ViewEncapsulation.Emulated
    // will override global styles when you have ViewEncapsulation.None
    // will ignore bootstrap and global styles if you set ViewEncapsulation.ShadowDom
    `
      .highlighter {
        background-color: #eee;
      }
    `
  ]
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
