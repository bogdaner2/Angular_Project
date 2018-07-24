import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '../../../../node_modules/@angular/common/http';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css'],
  providers : [TicketService]
})
export class TicketListComponent implements OnInit {


  Tickets : Array<Ticket>;

  constructor(public service : TicketService){

  }

  ngOnInit(){
    this.getTickets();
  }

  getTickets(){
    this.service.getAllTickets().subscribe((data : Array<Ticket>) => {
this.Tickets = data;
    })
  }

}
