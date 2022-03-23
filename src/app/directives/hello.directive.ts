import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private element:ElementRef) {
    this.element.nativeElement.style.fontStyle = 'italic';
  }

}
