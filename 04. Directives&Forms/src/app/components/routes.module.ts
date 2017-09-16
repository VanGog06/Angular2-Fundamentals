import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./routes/home.component";
import { AllCarsComponent } from "./cars/all.cars.component";
import { PageNotFoundComponent } from "./routes/page.not.found.component";
import { CarDetailsComponent } from "./cars/car.details.component";
import { AllOwnersComponent } from "./owners/all.owners.component";
import { OwnerDetailsComponent } from "./owners/owner.details.component";
import { CreateCarFormComponent } from "./cars/create.car.form.component";
import { EditCarFormComponent } from "./cars/edit.car.form.component";
import { EditCarCommentFormComponent } from "./cars/edit.car.comment.form.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cars/all', component: AllCarsComponent },
  { path: 'cars/create', component: CreateCarFormComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
  { path: 'cars/edit/:id', component: EditCarFormComponent },
  { path: 'cars/edit/comments/:carId/:commentId', component: EditCarCommentFormComponent },
  { path: 'owners/all', component: AllOwnersComponent },
  { path: 'owners/:name', component: OwnerDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})

export class AppRoutesModule { }
