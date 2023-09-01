import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: []
})
export class ConceptsComponent implements OnInit {
  appName = 'Contact Manager App!';
  companyName = 'Cognizant';
  course = 'Angular 14';

  constructor() {}

  ngOnInit(): void {}

  handleClickMe(event: any) { // receiving event object
    console.log(event);
    event.target.innerText = 'Clicked';
    // Todo: disable the button
  }
}
