import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component ({
  selector: 'repos-button',
  template: `<button (click)='showRepos()'>{{reposText}} Repos</button>`
})

export class GithubReposButton {
  @Input() reposText;
  @Output() showReposClicked = new EventEmitter<boolean>();

  showRepos() {
    this.showReposClicked.emit(true);
  }
}
