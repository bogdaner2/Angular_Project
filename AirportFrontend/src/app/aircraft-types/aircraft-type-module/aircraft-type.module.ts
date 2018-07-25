import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftTypeService } from '../aircraft-type.service';
import { AircraftTypeDetailComponent } from '../aircraft-type-detail/aircraft-type-detail.component';
import { AircraftTypeListComponent } from '../aircraft-type-list/aircraft-type-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AircraftTypeDetailComponent,
    AircraftTypeListComponent
  ],
  providers : [AircraftTypeService]
})
export class AircraftTypeModule { }
