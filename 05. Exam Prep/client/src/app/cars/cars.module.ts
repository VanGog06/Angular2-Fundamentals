import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddCarComponent } from './add-car.component';
import { ListCarsComponent } from './list-cars.component';
import { CarDetailsComponent } from './car-details.component';

import { CarsActions } from '../store/cars/cars.actions';
import { CarsService } from './cars.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    AddCarComponent,
    ListCarsComponent,
    CarDetailsComponent
  ],
  providers: [
    CarsActions,
    CarsService
  ]
})

export class CarsModule { }
