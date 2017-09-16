import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { config } from './core/config';

import { NgReduxModule, NgRedux } from 'ng2-redux';
import { store, IAppState } from './store';

import { CoreModule } from './core/core.module';
import { AnimalRoutesModule } from './routes.module';
import { UsersModule } from './users/users.module';
import { StatsModule } from './stats/stats.module';
import { AnimalsModule } from './animals/animals.module';

import { AuthService } from './core/auth.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgReduxModule,
    CoreModule,
    UsersModule,
    AnimalRoutesModule,
    StatsModule,
    AnimalsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<IAppState>,
    private authService: AuthService,
    private router: Router
  ) {
    this.ngRedux.provideStore(store);
    config(this.ngRedux, this.authService, this.router);
  }
}
