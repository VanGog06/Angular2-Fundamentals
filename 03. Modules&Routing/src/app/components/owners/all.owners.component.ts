import { Component, OnInit } from "@angular/core";
import { CarsService } from "../cars/cars.service";
import { CarsDataInfo } from "../cars/cars.data.info";

@Component({
  selector: 'owners',
  templateUrl: './all.owners.component.html',
  styles: ['img { width: 25%; }']
})

export class AllOwnersComponent implements OnInit {
  cars: CarsDataInfo[];
  ownersImage = 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png';
  owners = [];
  ownersToShow = [];
  activePage = 1;
  areOwnersLeft = true;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService
      .getCarsData()
      .then(data => {
        this.cars = data;
        this.filterOwners();
        this.sortOwners(false);
        this.sliceOwnersPerPage();
      });
  }

  filterOwners() {
    for (let car of this.cars) {
      if (this.owners.indexOf(car.owner.name) === -1) {
        this.owners.push(car.owner.name);
      }
    }
  }

  sortOwners(sortDescending) {
    if (sortDescending) {
      this.owners = this.owners.sort().reverse();
    } else {
      this.owners = this.owners.sort();
    }
  }

  sortOwnersAscending() {
    this.sortOwners(false);
    this.activePage = 1;
    this.sliceOwnersPerPage();
  }

  sortOwnersDescending() {
    this.sortOwners(true);
    this.activePage = 1;
    this.sliceOwnersPerPage();
  }

  prevPageTriggered() {
    if (this.activePage > 1) {
      this.activePage--;
      this.sliceOwnersPerPage();
      this.areOwnersLeft = true;
    }
  }

  nextPageTriggered() {
    if (this.owners.length / 2 > this.activePage) {
      this.activePage++;
      this.sliceOwnersPerPage();
      this.areOwnersLeft = true;
    } else {
      this.areOwnersLeft = false;
    }
  }

  sliceOwnersPerPage() {
    this.ownersToShow = this.owners.slice((this.activePage - 1) * 2, (this.activePage) * 2);
  }
}
