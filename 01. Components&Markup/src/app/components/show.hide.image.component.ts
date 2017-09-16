import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'show-hide-image',
  template: `<button (click)='showHideImage()'>{{showHideText}} Image</button>`
})

export class ShowHideImageComponent {
  @Input() showHideText: string;
  @Output() imageStateChanged = new EventEmitter<boolean>()

  showHideImage() {
    this.imageStateChanged.emit(true);
  }
}
