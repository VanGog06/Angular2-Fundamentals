import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CarsPaginationComponent } from "./cars.pagination.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CarsPaginationComponent],
  providers: [],
  exports: [CarsPaginationComponent]
})

export class PagingModule { }
