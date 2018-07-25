import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PilotDetailComponent } from '../pilot-detail/pilot-detail.component';
import { PilotListComponent } from '../pilot-list/pilot-list.component';
import { PilotService } from '../pilot.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PilotDetailComponent,
    PilotListComponent],
  providers : [PilotService]
})
export class PilotModule { }
