import { initialState } from './stats.state';

import { STATS_REQUESTED } from './stats.actions';

function statsRequested(state, action) {
  const stats = action.stats;

  return Object.assign({}, state, {
    animals: stats.animals,
    users: stats.users
  });
}

export function statsReducer(state = initialState, action) {
  switch(action.type) {
    case STATS_REQUESTED:
      return statsRequested(state, action);
    default:
      return state;
  }
}
