import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

/*- Написать директиву textModificator которая принимает в себя 2 параметра
- 1 параметр цвет который будет на бэкграунде при наведении на элемент,
- 2 параметр текст который будет добавляться к исходному тексту на котором висит директива при наведении
- Возможно понадобится вот эта статья: https://metanit.com/web/angular2/3.3.php */

@Directive({
  selector: '[appTextModificator]'
})
export class TextModificatorDirective {
  @Input() newBackColor: string = "red";
  @Input() newTextAddition: string = "meow";

  currentBackgroundColor: string = '';
  currentTextContent: string = '';

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  @HostListener( 'mouseenter' ) OnEnter(){
    this.currentBackgroundColor = this.element.nativeElement.style.backgroundColor;
    this.currentTextContent = this.element.nativeElement.textContent;
    this.setBackgroundColor(this.newBackColor);
    this.addTextonHover(this.newTextAddition);
  }

  @HostListener( 'mouseleave' ) OnLeave(){
    this.setBackgroundColor(this.currentBackgroundColor);
    this.addTextonHover('');
  }

  private addTextonHover(text: string) {
    this.element.nativeElement.textContent=`${this.currentTextContent} ${text}`;
  }

  private setBackgroundColor(color: string) {
      this.renderer.setStyle(this.element.nativeElement, "background-color", color);
  }
}
