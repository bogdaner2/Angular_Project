import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
  providers: [TicketService]
})

export class TicketDetailComponent implements OnInit {

  ticket : Ticket;

  constructor(public service : TicketService,private route: ActivatedRoute){

    let id = route.params._value.id;
    service.getTicket(id).subscribe((data : Ticket) => {
      this.ticket = data;
          })
  }

  ngOnInit(){
  }
}
