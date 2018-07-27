import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AircraftTypeService } from '../aircraft-type.service';
import { AircraftTypeDetailComponent } from '../aircraft-type-detail/aircraft-type-detail.component';
import { AircraftTypeListComponent } from '../aircraft-type-list/aircraft-type-list.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AircraftTypeDetailComponent,
    AircraftTypeListComponent
  ],
  providers : [AircraftTypeService]
})
export class AircraftTypeModule { }
