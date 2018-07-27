import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartureService } from '../departure.service';
import { DepartureDetailComponent } from '../departure-detail/departure-detail.component';
import { DepartureListComponent } from '../departure-list/departure-list.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    DepartureDetailComponent,
    DepartureListComponent
  ],
  providers : [DepartureService]
})
export class DepartureModule { }
