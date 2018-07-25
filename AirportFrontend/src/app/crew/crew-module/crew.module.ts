import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewService } from '../crew.service';
import { CrewListComponent } from '../crew-list/crew-list.component';
import { CrewDetailComponent } from '../crew-detail/crew-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CrewListComponent,
    CrewDetailComponent
  ],
  providers : [CrewService]
})
export class CrewModule { }
