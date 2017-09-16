import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { GithubProfileInfo } from "./github.profile.info";
import { GithubFollowersInfo } from "./github.followers.info";
import { GithubReposInfo } from "./github.repos.info";
import { GithubContributorsInfo } from "./github.contributors.info";
import 'rxjs/add/operator/toPromise';

const baseUrl = 'https://api.github.com';
const username = 'ivaylokenov';

@Injectable()
export class GithubData {
  constructor(private http: Http){}

  getProfileInformation(): Promise<GithubProfileInfo> {
    const url = `${baseUrl}/users/${username}`;

    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as GithubProfileInfo)
      .catch(err => {
        console.log(err);
        return new GithubProfileInfo();
      });
  }

  getFollowersInformation(): Promise<GithubFollowersInfo> {
    const url = `${baseUrl}/users/${username}/followers`;

    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as GithubFollowersInfo)
      .catch(err => {
        console.log(err);
        return new GithubFollowersInfo();
      });
  }

  getReposInformation(user): Promise<GithubReposInfo> {
    const url = `${baseUrl}/users/${user}/repos`;

    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as GithubReposInfo)
      .catch(err => {
        console.log(err);
        return new GithubReposInfo();
      });
  }

  getContributorsInformation(user, repo): Promise<GithubContributorsInfo> {
    const url = `${baseUrl}/repos/${user}/${repo}/contributors`;

    return this.http
      .get(url)
      .toPromise()
      .then(resp => resp.json() as GithubContributorsInfo)
      .catch(err => {
        console.log(err);
        return new GithubContributorsInfo();
      });
  }
}
