import { Component, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'background-color',
  template: `
    <span>Background Color: </span>
    <select (change)='handleColorChange($event.target.value)'>
      <option value='white'>White</option>
      <option value='red'>Red</option>
      <option value='green'>Green</option>
      <option value='blue'>Blue</option>
      <option value='yellow'>Yellow</option>
      <option value='black'>Black</option>
    </select>
  `
})

export class BackgroundColorComponent {
  @Output() bgColorSelected = new EventEmitter<string>();

  handleColorChange(color: string) {
    this.bgColorSelected.emit(color);
  }
}
