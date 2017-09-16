import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PagingModule } from "../shared/paging.module";
import { ToastModule } from "ng2-toastr";

import { AllCarsComponent } from "./all.cars.component";
import { CarDetailsComponent } from "./car.details.component";
import { SortButtonsComponent } from "./cars.sort.buttons.component";
import { CreateCarFormComponent } from "./create.car.form.component";
import { CreateCarCommentFormComponent } from "./create.car.comment.form.component";
import { EditCarFormComponent } from "./edit.car.form.component";
import { EditCarCommentFormComponent } from "./edit.car.comment.form.component";

import { CarImageDirective } from "../directives/car.image.directive";

import { EnginePipe } from "../pipes/engine.pipe";

import { CarsService } from "./cars.service";

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, PagingModule, ToastModule],
  declarations: [AllCarsComponent, CarDetailsComponent, SortButtonsComponent, CreateCarFormComponent, CreateCarCommentFormComponent, EditCarFormComponent, EditCarCommentFormComponent, CarImageDirective, EnginePipe],
  providers: [CarsService],
  exports: [AllCarsComponent]
})

export class CarsModule { }
