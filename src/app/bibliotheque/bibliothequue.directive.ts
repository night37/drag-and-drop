import {Directive, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBibliothequue]'
})
export class BibliothequueDirective {

  constructor(el: ElementRef, renderer: Renderer2) { 
   
      renderer.setStyle(el.nativeElement, 'color', 'red');
  }
  

}
