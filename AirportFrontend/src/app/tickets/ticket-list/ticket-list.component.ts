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

  createTicket(){
    let ticket = new Ticket("1","1000","NUM344")
    this.service.createTicket(ticket);
    this.Tickets.push(ticket);
  }

  deleteTicket(id : number){
    this.service.deleteTicket(id);
    this.Tickets = this.Tickets.filter(e => { return parseInt(e.id) !== id; });
  }

  updateTicket() {
    let ticket = new Ticket("1","1000","TEST999");
    this.service.updateTicket(1,ticket);
  }

}
