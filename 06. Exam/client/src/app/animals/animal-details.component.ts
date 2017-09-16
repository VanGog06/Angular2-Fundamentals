import { Component, OnInit } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { ActivatedRoute } from '@angular/router';

import { IAppState } from '../store/app.state';

import { AnimalsActions } from '../store/animals/animals.actions';
import { AnimalsModel} from './animals.model';

import { AuthService } from '../core/auth.service';

@Component({
  selector: 'animal-details',
  templateUrl: './animal-details.component.html',
  styles: ['img { width: 25%; } .comments { margin: 50px 0; }']
})

export class AnimalDetailsComponent implements OnInit {
  animal: AnimalsModel = new AnimalsModel();
  reaction: object = {type: 'like'};
  comment: object = {message: ''};
  comments: Array<object> = [];

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private route: ActivatedRoute,
    private animalsActions: AnimalsActions,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route
      .params
      .subscribe(params => {
        const id = params['id'];

        this.animalsActions
          .animalDetails(id);

        this.animalsActions
          .allComments(id);

        this.ngRedux
          .select(state => state.animals)
          .subscribe(animal => {
            this.animal = animal.animalDetails;
            this.comments = animal.animalComments;
          });
      });
  }

  selectChange(event) {
    this.reaction['type'] = event.target.value;
  }

  submitReaction() {
    this.animalsActions
      .react(this.animal['id'], this.reaction);

    this.ngRedux
      .select(state => state.animals)
      .subscribe(animal => {
        this.animal = animal.animalDetails;
        this.comments = animal.animalComments;
      });
  }

  submitComment() {
    const username = this.authService.getUser();

    this.animalsActions
      .comment(this.animal['id'], this.comment, username);
  }
}

