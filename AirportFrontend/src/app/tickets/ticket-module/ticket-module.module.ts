import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketDetailComponent } from '../ticket-detail/ticket-detail.component';
import { TicketListComponent } from '../ticket-list/ticket-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TicketDetailComponent ,
    TicketListComponent
    ]
})
export class TicketModuleModule { }
