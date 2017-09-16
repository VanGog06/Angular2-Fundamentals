import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutesModule } from "./components/routes.module";

import { OwnersModule } from "./components/owners/owners.module";
import { PagingModule } from "./components/shared/paging.module";
import { CarsModule } from "./components/cars/cars.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    OwnersModule,
    PagingModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
