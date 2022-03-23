import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

/*- Создать дубль директивы, переписав методы отслеживания положения в host
название директивы textModificatorHost */

@Directive({
  selector: '[appTextModificatorHost]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class TextModificatorHostDirective {

  @Input() newBackColor: string = "red";
  @Input() newTextAddition: string = "meow";

  currentBackgroundColor: string = '';
  currentTextContent: string = '';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  onMouseEnter() {
    this.currentBackgroundColor = this.element.nativeElement.style.backgroundColor;
    this.currentTextContent = this.element.nativeElement.textContent;
    this.setBackgroundColor(this.newBackColor);
    this.addTextonHover(this.newTextAddition);
  }

  onMouseLeave() {
    this.setBackgroundColor(this.currentBackgroundColor);
    this.addTextonHover('');
  }

  private addTextonHover(text: string) {
    this.element.nativeElement.textContent=`${this.currentTextContent} ${text}`; //могу переписать на insertAdjasmentHTML
  }

  private setBackgroundColor(color: string) {
      this.renderer.setStyle(this.element.nativeElement, "background-color", color);
  }
}
