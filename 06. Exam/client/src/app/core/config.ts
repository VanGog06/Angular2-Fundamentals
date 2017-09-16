import { NavigationStart } from '@angular/router';

import { ROUTE_CHANGE } from '../store/core/core.actions';
import { USER_LOGGEDIN } from '../store/users/users.actions';

export function config(ngRedux, authService, router) {
  router.events.subscribe(ev => {
    if (ev instanceof NavigationStart) {
      ngRedux.dispatch({
        type: ROUTE_CHANGE
      })
    }
  });

  if (authService.isUserAuthenticated()) {
    const token = authService.getToken();
    const username = authService.getUser();

    ngRedux.dispatch({
      type: USER_LOGGEDIN,
      result: {
        success: true,
        token: token,
        user: {
          name: username
        }
      }
    });
  }
}
