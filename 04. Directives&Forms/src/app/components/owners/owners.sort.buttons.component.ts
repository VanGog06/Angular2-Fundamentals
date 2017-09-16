import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sort-owners',
  template: `
    <button (click)='sortAscending()'>Ascending</button>
    <button (click)='sortDescending()'>Descending</button>
  `
})

export class OwnersSortButtonsComponent {
  @Output() sortAscendingClicked = new EventEmitter<boolean>();
  @Output() sortDescendingClicked = new EventEmitter<boolean>();

  sortAscending() {
    this.sortAscendingClicked.emit(true);
  }

  sortDescending() {
    this.sortDescendingClicked.emit(true);
  }
}
