import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatsComponent } from './stats.component';

import { StatsActions } from '../store/stats/stats.actions';
import { StatsService } from './stats.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StatsComponent
  ],
  providers: [
    StatsActions,
    StatsService
  ]
})

export class StatsModule { }
