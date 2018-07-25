import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  Flights : Array<Flight>;
  lastId : number;

  constructor(public service : FlightService){ }

   ngOnInit(){
    this.getFlights();
  }

  getFlights(){
    this.service.getAllFlights().subscribe((data : Array<Flight>) => {
    this.Flights = data;
    this.lastId = this.Flights[this.Flights.length - 1].id;
    })
  }

  createFlight(){
    let flight = new Flight(0,"AAA111","Rome","05-06-2017","London","06-06-2017",[1,3,4]);
    this.service.createFlight(flight).subscribe();
    this.lastId += 1;
    flight.id = this.lastId;
    this.Flights.push(flight);
  }

  deleteFlight(id : number){
    this.service.deleteFlight(id).subscribe();
    this.Flights = this.Flights.filter(e => { return e.id !== id; });
  }

  updateFlight() {
    let flight = new Flight(0,"RRR222","Rome","05-06-2017","London","06-06-2017",[1,3,4]);
    this.service.updateFlight(1,flight).subscribe();
    let temp = this.Flights.find(x => x.id == 1)
    temp.number = flight.number;
    temp.pointOfDeparture = flight.pointOfDeparture;
    temp.destination = temp.destination;
    temp.departureTime = temp.departureTime;
    temp.arrivelTime = temp.arrivelTime;
  }

}
