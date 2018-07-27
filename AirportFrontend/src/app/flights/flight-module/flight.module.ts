import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightListComponent } from '../flight-list/flight-list.component';
import { FlightDetailComponent } from '../flight-detail/flight-detail.component';
import { FlightService } from '../flight.service';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    FlightListComponent,
    FlightDetailComponent
  ],
  providers : [FlightService]
})
export class FlightModule { }
