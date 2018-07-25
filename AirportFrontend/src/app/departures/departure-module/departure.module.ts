import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartureService } from '../departure.service';
import { DepartureDetailComponent } from '../departure-detail/departure-detail.component';
import { DepartureListComponent } from '../departure-list/departure-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DepartureDetailComponent,
    DepartureListComponent
  ],
  providers : [DepartureService]
})
export class DepartureModule { }
