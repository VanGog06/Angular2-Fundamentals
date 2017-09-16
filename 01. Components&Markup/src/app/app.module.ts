import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListArticlesComponent } from "./components/list.articles.component";
import { ArticleDetailsComponent } from "./components/article.details.component";
import { ReadMoreComponent } from "./components/read.more.component";
import { ShowHideImageComponent } from "./components/show.hide.image.component";
import { IncreaseSizeComponent } from "./components/increase.size.component";
import { DecreaseSizeComponent } from "./components/decrease.size.component";
import { FontColorComponent } from "./components/font.color.component";
import { BackgroundColorComponent } from "./components/background.color.component";

@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    ArticleDetailsComponent,
    ReadMoreComponent,
    ShowHideImageComponent,
    IncreaseSizeComponent,
    DecreaseSizeComponent,
    FontColorComponent,
    BackgroundColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
