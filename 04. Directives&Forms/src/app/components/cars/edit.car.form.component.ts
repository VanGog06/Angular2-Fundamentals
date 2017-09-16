import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { CarsService } from "./cars.service";
import { CarsDataInfo } from "./cars.data.info";

@Component({
  selector: 'edit-car',
  templateUrl: './edit.car.form.component.html'
})

export class EditCarFormComponent implements OnInit {
  cars: CarsDataInfo[];
  car: CarsDataInfo;

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private router: Router
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.carsService
      .getCarsData()
      .then(data => {
        this.cars = data;
        this.car = this.cars.filter(car => {
          return Number(car.id) === Number(id);
        })[0];
      })
  }

  editCar() {
    this.carsService.editCar(this.car);
    this.router.navigate(['/cars/all']);
  }
}
