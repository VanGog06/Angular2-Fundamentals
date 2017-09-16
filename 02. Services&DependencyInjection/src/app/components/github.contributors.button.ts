import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component ({
  selector: 'contributors-button',
  template: `<button (click)='showContributors()'>{{contributorsText}} contributors</button>`
})

export class GithubContributorsButton {
  @Input() contributorsText: string;
  @Output() showContributorsClicked = new EventEmitter<boolean>();

  showContributors() {
    this.showContributorsClicked.emit(true);
  }
}
