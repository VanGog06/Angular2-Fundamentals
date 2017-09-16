import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Router } from '@angular/router';

import { RegisterUserModel } from './register-user.model';

import { UsersActions } from '../store/users/users.actions';
import { IAppState } from '../store/app.state';

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})

export class RegisterComponent {
  user: RegisterUserModel = new RegisterUserModel();

  constructor (
    private userActions: UsersActions,
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) { }

  register() {
    this.userActions
      .register(this.user);

    this.ngRedux
      .select(state => state.users.userRegistered )
      .subscribe(userRegistered => {
        if (userRegistered) {
          this.router.navigateByUrl('users/login');
        }
      });
  }
}
