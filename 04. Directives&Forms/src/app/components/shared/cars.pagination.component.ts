import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'paging',
  template: `
    <button (click)='prevPage()'>Prev</button>
    <button (click)='nextPage()'>Next</button>
  `
})

export class CarsPaginationComponent {
  @Output() nextPageClicked = new EventEmitter<boolean>();
  @Output() prevPageClicked = new EventEmitter<boolean>();

  nextPage() {
    this.nextPageClicked.emit(true);
  }

  prevPage() {
    this.prevPageClicked.emit(true);
  }
}
