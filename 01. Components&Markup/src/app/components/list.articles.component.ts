import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'list',
  templateUrl: './list.articles.html',
})

export class ListArticlesComponent {
  @Input() articles: { title: string, description: string, author: string, image: string } [];
  @Output() articleName = new EventEmitter<string>();

  handleArticleChange(value) {
    this.articleName.emit(value);
  }
}
