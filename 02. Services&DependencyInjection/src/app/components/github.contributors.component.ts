import { Component, Input } from "@angular/core";
import { GithubData } from "./github.data";
import { GithubContributorsInfo } from "./github.contributors.info";

@Component ({
  selector: 'contributors',
  templateUrl: './github.contributors.html',
  styles: [' .contributors { margin-left: 100px; } img { width: 25%; } ']
})

export class GithubContributorsComponent {
  githubContributorsInfo: GithubContributorsInfo;
  @Input() user: string;
  @Input() repo: string;
  contributorsText = 'Show';
  areContributorsShown = false;

  constructor(private githubData: GithubData) {}

  showContributorsClicked() {
    if (this.contributorsText === 'Show') {
      this.contributorsText = 'Hide';
      this.areContributorsShown = true;

      this.githubData
        .getContributorsInformation(this.user, this.repo)
        .then(reposInfo => {
          this.githubContributorsInfo = reposInfo;
        });
    } else {
      this.contributorsText = 'Show';
      this.areContributorsShown = false;
    }
  }
}
