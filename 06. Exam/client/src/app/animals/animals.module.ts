import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CreateAnimalComponent } from './create-animal.component';
import { ListAnimalsComponent } from './list-animals.component';
import { AnimalDetailsComponent } from './animal-details.component';

import { KeysPipe } from './animals.pipe';

import { AnimalsActions } from '../store/animals/animals.actions';
import { AnimalsService } from './animals.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    CreateAnimalComponent,
    ListAnimalsComponent,
    AnimalDetailsComponent,
    KeysPipe
  ],
  providers: [
    AnimalsActions,
    AnimalsService
  ]
})

export class AnimalsModule { }
