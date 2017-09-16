import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { CarsService } from "../cars/cars.service";
import { CarsDataInfo } from "../cars/cars.data.info";

@Component({
  selector: 'owner-details',
  templateUrl: 'owner.details.component.html',
  styles: ['img { width: 25%; margin-top: 50px; }']
})

export class OwnerDetailsComponent implements OnInit {
  cars: CarsDataInfo[];
  ownersCars: CarsDataInfo[];
  ownersName: string;
  ownersImage: string;

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService
  ) { }

  ngOnInit() {
    this.carsService
      .getCarsData()
      .then(data => {
        this.cars = data;
        this.filterOwner();
      });
  }

  filterOwner() {
    let name = this.route.snapshot.paramMap.get('name');

    this.ownersCars = this.cars.filter(car => {
      return car.owner.name === name;
    });

    this.ownersName = this.ownersCars[0].owner.name;
    this.ownersImage = this.ownersCars[0].owner.image;
  }
}
