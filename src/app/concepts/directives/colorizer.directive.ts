import { Directive, ElementRef, HostListener, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {
  baseElement: any;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    console.log('Inside Constructor');
    // find out the element in which appColorizer directive is used
    console.log(this.elRef.nativeElement);

    this.baseElement = this.elRef.nativeElement;
    // Let's have the bg color using JS (Not Recommended)
    // baseElement.style.backgroundColor = 'yellow';
    // baseElement.style.height = '400px';

    this.colorizeElement();
    this.renderPoweredByText();
  }

  colorizeElement() {
    this.renderer.setStyle(this.baseElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.baseElement, 'height', '400px');
    this.renderer.setStyle(this.baseElement, 'padding', '40px');
  }

  renderPoweredByText() {
    // Let's create an element
    const newPara = this.renderer.createElement('p'); // <p></p>
    this.renderer.setStyle(newPara, 'float', 'right'); // <p style="float:right;"></p>
    this.renderer.setStyle(newPara, 'font-size', '12px'); // <p style="float:right; font-size: 20px"></p>
    const poweredByText = this.renderer.createText(
      'Powered By Colorizer Directive'
    ); // Powered By Colorizer Directive
    this.renderer.appendChild(newPara, poweredByText); // <p style="float:right; font-size: 20px">Powered By Colorizer Directive</p>
    this.renderer.appendChild(this.baseElement, newPara);
  }

  // Handle the Event inside directive -- click
  @HostListener('click', ['$event.target'])
  handleClick(targetEl: any) {
    console.log(targetEl);
    this.renderer.setStyle(targetEl, 'background-color', 'purple');
    this.renderer.setStyle(targetEl, 'color', '#fff');

    const newSpan = this.renderer.createElement('p');
    this.renderer.setStyle(newSpan, 'font-size', '10px');
    const developedByText = this.renderer.createText('Developed By Arun');
    this.renderer.appendChild(newSpan, developedByText);
    this.renderer.appendChild(this.baseElement, newSpan);
  }

  // TODO: Try mouseover, -- change the bg color to lightgreen

  // TODO: Try mouseout  -- change the bg color to red

  // TODO: Learn about HostBinding

  // TODO: Try handling values of the attribute directive
  // Ref: https://github.com/arunprabu/employee-mgmt-ng-oct2022/blob/master/src/app/unit-testing-demo/directives/highlight.directive.ts

  // ngOnChanges(changes: SimpleChanges): void {

  // }
}
