import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'increase',
  template: `<button (click)='increaseSize()'>Font Size +</button>`
})

export class IncreaseSizeComponent {
  @Output() sizeIncreased = new EventEmitter<boolean>();

  increaseSize() {
    this.sizeIncreased.emit(true);
  }
}
