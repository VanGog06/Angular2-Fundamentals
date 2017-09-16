import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AllOwnersComponent } from "./all.owners.component";
import { OwnerDetailsComponent } from "./owner.details.component";
import { OwnersSortButtonsComponent } from "./owners.sort.buttons.component";
import { PagingModule } from "../shared/paging.module";
import { CarsService } from "../cars/cars.service";

@NgModule({
  imports: [CommonModule, RouterModule, PagingModule],
  declarations: [AllOwnersComponent, OwnerDetailsComponent, OwnersSortButtonsComponent],
  providers: [CarsService],
  exports: [AllOwnersComponent]
})

export class OwnersModule { }
