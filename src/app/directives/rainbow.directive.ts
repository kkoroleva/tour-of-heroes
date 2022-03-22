import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';


/*- Сделать директиву, которая делает следующее с текстом при навешивании директивы
https://codemyui.com/rainbow-text-animation/ */
@Directive({
  selector: '[appRainbow]',

})
export class RainbowDirective {


  constructor(private element: ElementRef) {
  }

  textD = '';

  @HostListener('mouseenter') OnEnter() {
    this.element.nativeElement.classList.add('anim-text-flow');
    this.textD = this.element.nativeElement.textContent;
    let meow = this.textD.trim().split('');

    this.element.nativeElement.innerHTML ='';
    meow.forEach(char => {
      this.element.nativeElement.insertAdjacentHTML('beforeend', `<span>${char}</span>`);
    })

  }

  @HostListener('mouseleave') OnLeave() {
    this.element.nativeElement.classList.remove('anim-text-flow');
    this.element.nativeElement.innerHTML = this.textD;
    console.log(this.textD);
  }
}
