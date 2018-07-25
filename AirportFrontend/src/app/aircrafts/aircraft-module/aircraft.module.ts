import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftService } from '../aircraft.service';
import { AircraftDetailComponent } from '../aircraft-detail/aircraft-detail.component';
import { AircraftListComponent } from '../aircraft-list/aircraft-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AircraftDetailComponent,
    AircraftListComponent],
  providers : [AircraftService]
})
export class AircraftModule { }
