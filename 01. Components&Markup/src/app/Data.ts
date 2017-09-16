export class Data {
  private articles: { title: string, description: string, author: string, image: string } [];

  constructor(articles: { title: string, description: string, author: string, image: string } []) {
    this.articles = articles;
  }

  getData() {
    return this.articles;
  }
}
