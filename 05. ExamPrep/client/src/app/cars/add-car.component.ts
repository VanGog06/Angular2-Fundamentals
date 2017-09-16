import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router';

import { IAppState } from '../store/app.state';

import { AddCarModel } from './add-car.model'

import { CarsActions } from '../store/cars/cars.actions';

@Component({
  selector: 'add-car',
  templateUrl: './add-car.component.html'
})

export class AddCarComponent {
  car: AddCarModel = new AddCarModel();

  constructor(
    private carsActions: CarsActions,
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) { }

  addCar() {
    this.carsActions
      .addCar(this.car);

    let subscription = this.ngRedux
      .select(state => state.cars)
      .subscribe(cars => {
        if (cars.carAdded) {
          const carId = cars.carAddedId;

          subscription.unsubscribe();
          this.router.navigateByUrl(`/cars/details/${carId}`);
        }
      });
  }
}
