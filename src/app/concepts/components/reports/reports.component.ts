import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  template: `
    <div class="text-bg-secondary p-3">
      <h5>Here you can generate Report | This is child component</h5>
      <button class="btn btn-warning" (click)="handleGenerateReport()">
        GENERATE REPORT
      </button>
    </div>
  `,
  styles: []
})
export class ReportsComponent implements OnInit {
  // Step 1: create a variable and make it custom event
  // Step 1.1 Let's create an object for EventEmitter
  // Step 1.2 Let's make it a custom event
  @Output() reportGenerated: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleGenerateReport() {
    console.log('generating...');
    // Step 2: Let's trigger / emit reportGenerated event
    this.reportGenerated.emit({
      status: 'Report is being generated. Please wait'
    });
    setTimeout(() => {
      this.reportGenerated.emit({
        id: 32456789,
        status: 'Report Generated Successfully!'
      }); // sending the data to parent comp -- For Step 3: see concepts.comp.html
    }, 4000);
    
  }
}
