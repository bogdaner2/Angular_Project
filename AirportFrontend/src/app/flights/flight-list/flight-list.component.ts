import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { Ticket } from '../../tickets/ticket';
import { TicketService } from '../../tickets/ticket.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  Flights : Array<Flight>;
  Tickets : Array<Ticket>;
  selectedTickets : number [];
  ticketId : number;
  lastId : number;

  constructor(public service : FlightService,public serviceTicket : TicketService){ }

   ngOnInit(){
    this.getFlights();
    this.selectedTickets = [];
  }

  getFlights(){
    this.service.getAllFlights().subscribe((data : Array<Flight>) => {
    this.Flights = data;
    this.lastId = this.Flights[this.Flights.length - 1].id;
    })
    this.serviceTicket.getAllTickets().subscribe((data : Array<Ticket>) => {
      this.Tickets = data;
      })
  }

  createFlight(number : string, departure : string , deparTime : string , destination : string , arrival:string){
    let flight = new Flight(0,number,departure,deparTime,destination,arrival,this.selectedTickets);
    this.service.createFlight(flight).subscribe();
    this.lastId++;
    flight.id = this.lastId;
    this.Flights.push(flight);
  }

  deleteFlight(id : number){
    this.service.deleteFlight(id).subscribe();
    this.Flights = this.Flights.filter(e => { return e.id !== id; });
  }

  changeTicket($event){
    this.ticketId = $event.id;
    }

  addTicket(){
    this.selectedTickets.push(this.ticketId);
  }

}
