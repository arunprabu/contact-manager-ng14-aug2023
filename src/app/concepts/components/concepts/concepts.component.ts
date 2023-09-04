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
  myAge = 24;
  dataReceivedFromChild: any;

  constructor() {}

  ngOnInit(): void {}

  handleClickMe(event: any) {
    // receiving event object
    console.log(event);
    event.target.innerText = 'Clicked';
    // Todo: disable the button
  }

  // Step 4  of Custom Event Binding -- receive the data
  handleReportGenerated(event: any) {
    console.log(event);
    this.dataReceivedFromChild = event;
  }
}
