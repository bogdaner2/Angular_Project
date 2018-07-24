import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketService} from '../ticket.service';
import { TicketListComponent } from '../ticket-list/ticket-list.component';
import { TicketDetailComponent } from '../ticket-detail/ticket-detail.component';
import { HttpClientModule } from '../../../../node_modules/@angular/common/http';
@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    TicketDetailComponent ,
    TicketListComponent
    ],
    providers : [TicketService]
})
export class TicketModule { }


