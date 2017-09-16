import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'sort',
  template: `
    <button (click)='chooseCriteria($event)'>Make</button>
    <button (click)='chooseCriteria($event)'>Owner</button>
    <button (click)='chooseCriteria($event)'>Date</button>
  `
})

export class SortButtonsComponent {
  @Output() sentCriteria = new EventEmitter<string>();

  chooseCriteria(event) {
    let criteria = event.target.outerText.toLowerCase();
    this.sentCriteria.emit(criteria);
  }
}
