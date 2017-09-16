import { Component, Input } from '@angular/core';
import { GithubReposInfo } from "./github.repos.info";
import { GithubData } from "./github.data";

@Component ({
  selector: 'repos',
  templateUrl: './github.repos.html',
  styles: [' .repos { margin-left: 50px; } ']
})

export class GithubReposComponent {
  githubReposInfo: GithubReposInfo;
  @Input() user: string;
  reposText = 'Show';
  areReposShown = false;

  constructor(private githubData: GithubData) {}

  showReposClicked() {
    if (this.reposText === 'Show') {
      this.reposText = 'Hide';
      this.areReposShown = true;

      this.githubData
        .getReposInformation(this.user)
        .then(reposInfo => {
          this.githubReposInfo = reposInfo;
        });
    } else {
      this.reposText = 'Show';
      this.areReposShown = false;
    }
  }
}
