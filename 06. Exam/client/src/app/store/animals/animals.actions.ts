import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState  } from '../app.state';

import { AnimalsService } from '../../animals/animals.service';

export const ADD_ANIMAL = 'animals/ADD';
export const ALL_ANIMALS = 'animals/ALL';
export const ANIMAL_DETAILS = 'animals/DETAILS';
export const ANIMAL_REACT = 'animals/REACT';
export const CREATE_COMMENT = 'animals/COMMENT';
export const ALL_COMMENTS = 'animals/ALL_COMMENTS';
export const MINE_ANIMALS = 'animals/MINE_ANIMALS';
export const DELETE_ANIMAL = 'animals/DELETE';

@Injectable()
export class AnimalsActions {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private animalsService: AnimalsService
  ) { }

  addAnimal(animal) {
    return this.animalsService
      .addAnimal(animal)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ADD_ANIMAL,
          result
        });
      });
  }

  allAnimals(page = 1, search = '') {
    this.animalsService
      .allAnimals(page, search)
      .subscribe(animals => {
        this.ngRedux.dispatch({
          type: ALL_ANIMALS,
          animals
        });
      });
  }

  animalDetails(id) {
    this.animalsService
      .animalDetails(id)
      .subscribe(animal => {
        this.ngRedux.dispatch({
          type: ANIMAL_DETAILS,
          animal
        });
      });
  }

  react(id, reaction) {
    this.animalsService
      .react(id, reaction)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: ANIMAL_REACT,
          result,
          reaction
        });
      });
  }

  comment(id, comment, username) {
    this.animalsService
      .comment(id, comment, username)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: CREATE_COMMENT,
          result,
          comment,
          username
        })
      });
  }

  allComments(id) {
    this.animalsService
      .allComments(id)
      .subscribe(comments => {
        this.ngRedux.dispatch({
          type: ALL_COMMENTS,
          comments
        })
      });
  }

  mine() {
    this.animalsService
      .mine()
      .subscribe(animals => {
        this.ngRedux.dispatch({
          type: MINE_ANIMALS,
          animals
        });
      });
  }

  delete(id) {
    this.animalsService
      .delete(id)
      .subscribe(result => {
        this.ngRedux.dispatch({
          type: DELETE_ANIMAL,
          result,
          id
        })
      });
  }
}
