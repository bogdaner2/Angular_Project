import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketDetailComponent } from './ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketService} from './ticket.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TicketDetailComponent ,
    TicketListComponent
    ],
    providers : [TicketService]
})
export class TicketModule{ }
