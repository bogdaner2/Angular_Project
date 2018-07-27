import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotDetailComponent } from '../pilot-detail/pilot-detail.component';
import { PilotListComponent } from '../pilot-list/pilot-list.component';
import { PilotService } from '../pilot.service';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    PilotDetailComponent,
    PilotListComponent],
  providers : [PilotService]
})
export class PilotModule { }
