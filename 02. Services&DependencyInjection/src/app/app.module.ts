import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { NgModule } from '@angular/core';

import { GithubData } from "./components/github.data";
import { AppComponent } from './app.component';
import { GithubProfleComponent } from "./components/github.profle.component";
import { GithubFollowersButton } from "./components/github.followers.button";
import { GithubFollowersComponent } from "./components/github.followers.component";
import { GithubReposButton } from "./components/github.repos.button";
import { GithubReposComponent } from "./components/github.repos.component";
import { GithubContributorsButton } from "./components/github.contributors.button"
import { GithubContributorsComponent } from "./components/github.contributors.component"

@NgModule({
  declarations: [
    AppComponent,
    GithubProfleComponent,
    GithubFollowersButton,
    GithubFollowersComponent,
    GithubReposButton,
    GithubReposComponent,
    GithubContributorsButton,
    GithubContributorsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GithubData],
  bootstrap: [AppComponent]
})
export class AppModule { }
