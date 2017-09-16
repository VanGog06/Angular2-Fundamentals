import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CarsDataInfo } from "./cars.data.info";
import { CarsService } from "./cars.service";

@Component({
  selector: 'car-form',
  templateUrl: './create.car.form.component.html'
})

export class CreateCarFormComponent implements OnInit{
  cars: CarsDataInfo[];
  car: CarsDataInfo;

  constructor(
    private carsService: CarsService,
    private router: Router) {
    this.car = new CarsDataInfo (
      '',
      '',
      '',
      {id: 1, name: '', image: ''},
      Date.now(),
      '',
      0,
      '',
      [{id: '', owner: '', message: ''}]
    );
  }

  ngOnInit() {
    this.carsService
      .getCarsData()
      .then(data => this.cars = data);
  }

  createCar() {
    this.car.id = this.cars.length + 1;

    this.carsService
      .addCar(this.car);

    this.router.navigate(['cars/all']);
  }
}
