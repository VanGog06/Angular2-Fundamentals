import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PrivateRoute } from './private-route';

import { HttpService } from './http.service';

import { NavbarComponent } from './navbar.component';
import { MessageHandlerComponent } from './message-handler.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    MessageHandlerComponent
  ],
  providers: [
    HttpService,
    PrivateRoute
  ],
  exports: [
    NavbarComponent,
    MessageHandlerComponent
  ]
})

export class CoreModule { }
