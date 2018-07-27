import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrewService } from '../crew.service';
import { CrewListComponent } from '../crew-list/crew-list.component';
import { CrewDetailComponent } from '../crew-detail/crew-detail.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    CrewListComponent,
    CrewDetailComponent
  ],
  providers : [CrewService]
})
export class CrewModule { }
