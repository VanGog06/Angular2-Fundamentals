import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[roundedBorder]'
})

export class CarImageDirective {
  constructor(
    private eref: ElementRef
  ) {
    this.eref.nativeElement.style.borderRadius = '50%';
  }
}
