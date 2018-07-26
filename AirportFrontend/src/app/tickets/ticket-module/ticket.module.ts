import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService} from '../ticket.service';
import { TicketListComponent } from '../ticket-list/ticket-list.component';
import { TicketDetailComponent } from '../ticket-detail/ticket-detail.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    TicketDetailComponent ,
    TicketListComponent
    ],
    providers : [TicketService]
})
export class TicketModule { }


