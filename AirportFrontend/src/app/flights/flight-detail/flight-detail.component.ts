import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { Ticket } from '../../tickets/ticket';
import { FlightService } from '../flight.service';
import { TicketService } from '../../tickets/ticket.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {

  flight : Flight;
  tickets : Array<Ticket>;
  selectedTickets : number [];
  ticketId : number;
  lastId : number;
  isUpdate : boolean = false;

  ngOnInit(){
    this.selectedTickets = [];
  }

  constructor(
    public service : FlightService,
    public serviceTicket : TicketService,
    private route: ActivatedRoute){

    let id = parseInt(route.snapshot.paramMap.get('id'));
    service.getFlight(id).subscribe((data : Flight) => {
      this.flight = data;
          })
    serviceTicket.getAllTickets().subscribe((data : Array<Ticket>) => {
      this.tickets = data;
          })          
  }

  updateFlight(number : string, departure : string , deparTime : string , destination : string , arrival:string) {
    if(this.isUpdate == false){
      this.isUpdate = true
      return;
    }
    let _crew = new Flight(0,number,departure,deparTime,destination,arrival,this.selectedTickets);
    let _id = this.flight.id;
    this.service.updateFlight(_id,_crew).subscribe();
    this.flight = _crew;
    this.flight.id = _id;
    this.selectedTickets = [];
    this.isUpdate = false
  }

  changeTicket($event){
    this.ticketId = $event.id;
    }

  addTicket(){
    this.selectedTickets.push(this.ticketId);
  }
}
