import { Component, OnInit } from '@angular/core';
import { GithubData } from "./github.data";
import { GithubProfileInfo } from "./github.profile.info";

@Component ({
  selector: 'github',
  templateUrl: './github.profile.html'
})

export class GithubProfleComponent implements OnInit {
  githubProfileInfo: GithubProfileInfo;

  constructor(private githubData: GithubData) {}

  ngOnInit() {
    this.githubData
      .getProfileInformation()
      .then(githubData => {
        this.githubProfileInfo = githubData;
      });
  }
}
