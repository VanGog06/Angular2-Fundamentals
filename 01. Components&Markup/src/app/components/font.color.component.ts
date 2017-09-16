import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'font-color',
  template: `
    <span>Text Color: </span>
    <select (change)='handleColorChange($event.target.value)'>
      <option value='black'>Black</option>
      <option value='red'>Red</option>
      <option value='green'>Green</option>
      <option value='blue'>Blue</option>
      <option value='yellow'>Yellow</option>
      <option value='white'>White</option>
    </select>
  `
})

export class FontColorComponent {
  @Output() colorSelected = new EventEmitter<string>();

  handleColorChange(color: string) {
    this.colorSelected.emit(color);
  }
}
