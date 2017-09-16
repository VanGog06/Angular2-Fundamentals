import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../app.state';

import { StatsService } from '../../stats/stats.service';

export const STATS_REQUESTED = 'stats/REQUESTED';

@Injectable()
export class StatsActions {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private statsService: StatsService
  ) { }

  get() {
    return this.statsService
      .get()
      .subscribe(stats => {
        this.ngRedux.dispatch({
          type: STATS_REQUESTED,
          stats
        })
      });
  }
}
