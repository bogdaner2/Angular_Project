import { Component, OnInit } from '@angular/core';
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
  lastId : number;

  constructor(private service : TicketService){ }

   ngOnInit(){
    this.getTickets();
  }

  getTickets(){
    this.service.getAllTickets().subscribe((data : Array<Ticket>) => {
    this.Tickets = data;
    this.lastId = this.Tickets[this.Tickets.length - 1].id;
    })
  }

  deleteTicket(id : number){
    this.service.deleteTicket(id).subscribe();
    this.Tickets = this.Tickets.filter(e => { return e.id !== id; });
  }

  createTicket(number : string,price : number){
    let ticket = new Ticket(0,price,number);
    this.service.createTicket(ticket).subscribe();
    this.lastId++;
    ticket.id = this.lastId;
    this.Tickets.push(ticket);
  }

}
