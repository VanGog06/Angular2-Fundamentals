import { Component, OnInit } from "@angular/core";
import { CarsService } from "./cars.service";

@Component({
  selector: 'all-cars',
  templateUrl: './all.cars.component.html',
  styles: ['img { width: 25%; }']
})

export class AllCarsComponent implements OnInit {
  cars;
  carsToShow;
  private activePage = 1;
  private areCarsLeft = true;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService
      .getCarsData()
      .then(data => {
        this.cars = data;
        this.sort('make');
        this.sliceCarsPerPage();
        console.log(this.cars);
      });
  }

  sort(criteria) {
    if (criteria === 'date') {
      this.cars = this.cars.sort((a, b) => {
        return a.date - b.date;
      });
    } else if (criteria === 'owner') {
      this.cars = this.cars.sort((a, b) => {
        return a[criteria].name.localeCompare(b[criteria].name);
      });
    } else {
      this.cars = this.cars.sort((a, b) => {
        return a[criteria].localeCompare(b[criteria]);
      });
    }
  }

  criteriaReceived(criteria) {
    this.sort(criteria);
    this.activePage = 1;
    this.sliceCarsPerPage();
  }

  prevPageTriggered() {
    if (this.activePage > 1) {
      this.activePage--;
      this.sliceCarsPerPage();
      this.areCarsLeft = true;
    }
  }

  nextPageTriggered() {
    if (this.cars.length / 4 > this.activePage) {
      this.activePage++;
      this.sliceCarsPerPage();
      this.areCarsLeft = true;
    } else {
      this.areCarsLeft = false;
    }
  }

  sliceCarsPerPage() {
    this.carsToShow = this.cars.slice((this.activePage - 1) * 4, (this.activePage) * 4);
  }
}
