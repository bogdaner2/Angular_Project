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

  constructor(public service : TicketService){ }

   ngOnInit(){
    this.getTickets();
  }

  getTickets(){
    this.service.getAllTickets().subscribe((data : Array<Ticket>) => {
    this.Tickets = data;
    this.lastId = this.Tickets[this.Tickets.length - 1].id;
    })
  }

  createTicket(){
    let ticket = new Ticket(0,1000,"NUM344")
    this.service.createTicket(ticket).subscribe();
    this.lastId += 1;
    ticket.id = this.lastId;
    this.Tickets.push(ticket);
  }

  deleteTicket(id : number){
    this.service.deleteTicket(id).subscribe();
    this.Tickets = this.Tickets.filter(e => { return e.id !== id; });
  }

  updateTicket() {
    let ticket = new Ticket(4,999,"TESTЕST111");
    this.service.updateTicket(4,ticket).subscribe();
    let ticket2 = this.Tickets.find(x => x.id == 4)
    ticket2.number = ticket.number;
    ticket2.price = ticket.price;
  }

}
