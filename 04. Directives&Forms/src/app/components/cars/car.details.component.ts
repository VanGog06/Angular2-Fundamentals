import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CarsService } from "./cars.service";
import { CarsDataInfo } from "./cars.data.info";

@Component({
  selector: 'car-details',
  templateUrl: './car.details.component.html',
  styles: ['img { width: 50%; }']
})

export class CarDetailsComponent implements OnInit {
  cars: CarsDataInfo[];
  car: CarsDataInfo;

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService
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

  handleCommentCreated(comment) {
    this.car.comments.push(comment);
  }
}
