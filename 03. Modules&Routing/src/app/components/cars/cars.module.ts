import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PagingModule } from "../shared/paging.module";

import { AllCarsComponent } from "./all.cars.component";
import { CarDetailsComponent } from "./car.details.component";
import { SortButtonsComponent } from "./cars.sort.buttons.component";
import { CarsService } from "./cars.service";

@NgModule({
  imports: [CommonModule, RouterModule, PagingModule],
  declarations: [AllCarsComponent, CarDetailsComponent, SortButtonsComponent],
  providers: [CarsService],
  exports: [AllCarsComponent]
})

export class CarsModule { }
