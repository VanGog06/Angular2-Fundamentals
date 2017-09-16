import { Component } from "@angular/core";
import { GithubFollowersInfo } from "./github.followers.info";
import { GithubData } from "./github.data";

@Component({
  selector: 'followers',
  templateUrl: './github.followers.html',
  styles: ['.follower-avatar { width: 15%; } img { display: block; }']
})

export class GithubFollowersComponent {
  githubFollowersInfo: GithubFollowersInfo;
  buttonText: string = 'Show';
  areFollowersShown: boolean;

  constructor(private githubData: GithubData) {
  }

  followersShowed() {
    if (this.buttonText === 'Show') {
      this.buttonText = 'Hide';
      this.areFollowersShown = true;

      this.githubData
        .getFollowersInformation()
        .then(followersInfo => {
          this.githubFollowersInfo = followersInfo;
        });
    } else {
      this.buttonText = 'Show';
      this.areFollowersShown = false;
    }
  }
}
