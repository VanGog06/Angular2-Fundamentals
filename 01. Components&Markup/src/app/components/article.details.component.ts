import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component ({
  selector: 'article-details',
  templateUrl: './article.details.html',
  styles: ['img { width: 20%; }']
})

export class ArticleDetailsComponent implements OnInit, OnChanges {
  @Input() article: { title: string, description: string, author: string, image: string };
  private descriptionToShow: string;
  private currentStep: number = 0;
  private initialLettersCount: number = 250;
  private color: string;
  private bgColor: string;
  showDots: boolean = true;
  isShown: boolean = true;
  isImageShown: boolean = true;
  showHideText: string = 'Hide';
  fontSize: number = 18;

  showMoreDescription() {
    this.currentStep++;
    this.descriptionToShow += this.article.description.slice(this.currentStep * this.initialLettersCount, (this.currentStep + 1) * this.initialLettersCount);

    if (this.descriptionToShow.length >= this.article.description.length) {
      this.showDots = false;
      this.isShown = false;
    }
  }

  imageStateChanged() {
    this.isImageShown = !this.isImageShown;

    if (this.showHideText === 'Show') {
      this.showHideText = 'Hide';
    } else {
      this.showHideText = 'Show';
    }
  }

  sizeIncreased() {
    if (this.fontSize < 26) {
      this.fontSize += 2;
    }
  }

  sizeDecreased() {
    if (this.fontSize > 12) {
      this.fontSize -= 2;
    }
  }

  colorSelected(selectedColor) {
    this.color = selectedColor;
  }

  bgColorSelected(selectedColor) {
    this.bgColor = selectedColor;
  }

  ngOnInit() {
    this.descriptionToShow = this.article.description.slice(0, this.initialLettersCount);
  }

  ngOnChanges() {
    this.currentStep = 0;
    this.showDots = true;
    this.isShown = true;
    this.isImageShown = true;
    this.showHideText = 'Hide';
    this.descriptionToShow = this.article.description.slice(0, this.initialLettersCount);
  }
}
