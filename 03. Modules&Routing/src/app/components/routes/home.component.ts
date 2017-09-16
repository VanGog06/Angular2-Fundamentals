import { Component, OnInit } from "@angular/core";
import { CarsService } from "../cars/cars.service";
import { CarsDataInfo } from "../cars/cars.data.info";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styles: ['img { width: 25%; }']
})

export class HomeComponent implements OnInit {
  cars: CarsDataInfo[];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService
      .getCarsData()
      .then(data => {
        this.cars = data;
        this.sortCars();
      });
  }

  sortCars() {
    this.cars = this.cars.sort((a, b) => {
      return b.date - a.date;
    })
  }
}
