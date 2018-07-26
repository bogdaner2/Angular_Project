import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StewardessService } from '../stewardess.service';
import { StewardessListComponent } from '../stewardess-list/stewardess-list.component';
import { StewardessDetailComponent } from '../stewardess-detail/stewardess-detail.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '../../../../node_modules/@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    StewardessListComponent,
    StewardessDetailComponent
  ],
  providers : [StewardessService]
})
export class StewardessModule { }
