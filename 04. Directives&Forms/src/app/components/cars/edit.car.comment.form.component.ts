import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { CarsService } from "./cars.service";
import { CarsDataInfo } from "./cars.data.info";

@Component({
  selector: 'edit-comment',
  templateUrl: './edit.car.comment.form.component.html'
})

export class EditCarCommentFormComponent implements OnInit {
  cars: CarsDataInfo[];
  car: CarsDataInfo;
  comments;
  comment;

  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    let carId = this.route.snapshot.paramMap.get('carId');
    let commentId = this.route.snapshot.paramMap.get('commentId');

    this.carsService
      .getCarsData()
      .then(data => {
        this.cars = data;
        this.car = this.cars.filter(car => {
          return Number(car.id) === Number(carId);
        })[0];

        this.comment = this.car.comments.filter(comment => {
          return Number(comment.id) === Number(commentId);
        })[0];

        this.comments = this.car.comments.filter(comment => {
          return Number(comment.id) !== Number(commentId);
        });
      })
  }

  editComment() {
    this.comments.push(this.comment);
    this.car.comments = this.comments;

    this.carsService.editCar(this.car);
    this.router.navigate(['/cars', this.car.id]);
  }
}
