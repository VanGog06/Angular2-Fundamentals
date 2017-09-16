import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router';

import { IAppState } from '../store/app.state';

import { AnimalsActions } from '../store/animals/animals.actions';
import { AnimalsModel } from './animals.model';

@Component({
  selector: 'create-animal',
  templateUrl: './create-animal.component.html'
})

export class CreateAnimalComponent {
  animal: AnimalsModel = new AnimalsModel();

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private router: Router,
    private animalsActions: AnimalsActions
  ) { }

  createAnimal() {
    this.animalsActions
      .addAnimal(this.animal);

    this.ngRedux
      .select(state => state.animals)
      .subscribe(animals => {
        if (animals.animalAdded) {
          const animalId = animals.animalAddedId;


          this.router.navigateByUrl(`/animals/details/${animalId}`);
        }
      });
  }
}
