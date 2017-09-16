import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'read-more',
  template: `<button *ngIf='isShown' (click)='readMore()'>Read More</button>`
})

export class ReadMoreComponent {
  @Input() isShown: boolean;
  @Output() showMoreDescription = new EventEmitter<boolean>();

  readMore() {
    this.showMoreDescription.emit(true);
  }
}
