import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftService } from '../aircraft.service';
import { AircraftDetailComponent } from '../aircraft-detail/aircraft-detail.component';
import { AircraftListComponent } from '../aircraft-list/aircraft-list.component';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AircraftDetailComponent,
    AircraftListComponent],
  providers : [AircraftService]
})
export class AircraftModule { }
