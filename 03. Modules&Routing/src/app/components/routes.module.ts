import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./routes/home.component";
import { AllCarsComponent } from "./cars/all.cars.component";
import { PageNotFoundComponent } from "./routes/page.not.found.component";
import { CarDetailsComponent } from "./cars/car.details.component";
import { AllOwnersComponent } from "./owners/all.owners.component";
import { OwnerDetailsComponent } from "./owners/owner.details.component";

const routes: Routes= [
  { path: '', component: HomeComponent },
  { path: 'cars/all', component: AllCarsComponent },
  { path: 'cars/:id', component: CarDetailsComponent },
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
