import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StewardessService } from '../stewardess.service';
import { StewardessListComponent } from '../stewardess-list/stewardess-list.component';
import { StewardessDetailComponent } from '../stewardess-detail/stewardess-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StewardessListComponent,
    StewardessDetailComponent
  ],
  providers : [StewardessService]
})
export class StewardessModule { }
