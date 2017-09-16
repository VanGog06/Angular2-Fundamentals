import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component ({
  selector: 'followers-button',
  template: `<button (click)='showFollowers()'>{{buttonText}} Followers</button>`
})

export class GithubFollowersButton {
  @Input() buttonText: string;
  @Output() followersShowed = new EventEmitter<boolean>();

  showFollowers() {
    this.followersShowed.emit(true);
  }
}
