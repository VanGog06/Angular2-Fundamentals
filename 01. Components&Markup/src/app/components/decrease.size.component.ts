import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'decrease',
  template: `<button (click)='decreaseSize()'>Font Size -</button>`
})

export class DecreaseSizeComponent {
  @Output() sizeDecreased = new EventEmitter<boolean>();

  decreaseSize() {
    this.sizeDecreased.emit(true);
  }
}
