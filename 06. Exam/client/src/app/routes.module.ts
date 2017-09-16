import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './users/register.component';
import { LoginComponent } from './users/login.component';
import { StatsComponent } from './stats/stats.component';
import { CreateAnimalComponent } from './animals/create-animal.component';
import { ListAnimalsComponent } from './animals/list-animals.component';
import { AnimalDetailsComponent } from './animals/animal-details.component'
import { ProfileComponent } from './users/profile.component';

import { PrivateRoute } from './core/private-route';

const routes: Routes = [
  { path: '', component: StatsComponent },
  { path: 'users/register', component: RegisterComponent },
  { path: 'users/login', component: LoginComponent },
  {
    path: 'animals/create',
    component: CreateAnimalComponent,
    canActivate: [PrivateRoute]
  },
  { path: 'animals/all', component: ListAnimalsComponent },
  {
    path: 'animals/details/:id',
    component: AnimalDetailsComponent,
    canActivate: [PrivateRoute]
  },
  {
    path: 'animals/mine',
    component: ProfileComponent,
    canActivate: [PrivateRoute]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AnimalRoutesModule { }
