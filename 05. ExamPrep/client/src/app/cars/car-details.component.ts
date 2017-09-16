import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../store/app.state';

import { CarReviewModel } from './car-review.model';

import { CarsActions } from '../store/cars/cars.actions';

@Component({
  selector: 'car-detais',
  templateUrl: './car-details.component.html'
})

export class CarDetailsComponent implements OnInit {
  car: object = {};
  reviews: Array<object> = [];
  review: CarReviewModel = new CarReviewModel(5);

  constructor(
    private route: ActivatedRoute,
    private carsActions: CarsActions,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    this.route
      .params
      .subscribe(params => {
        const id = params['id'];

        this.carsActions
          .carDetails(id);

        this.ngRedux
          .select(state => state.cars)
          .subscribe(cars => {
            this.car = cars.carDetails;
            this.reviews = cars.carReviews;
          });
      });
  }

  like() {
    this.carsActions
      .like(this.car['id']);
  }

  submitReview() {
    this.carsActions
      .submitReview(this.car['id'], this.review);
  }
}
