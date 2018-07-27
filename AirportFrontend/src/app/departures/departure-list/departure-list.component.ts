import { Component, OnInit } from '@angular/core';
import { Departure } from '../departure';
import { DepartureService } from '../departure.service';
import { Crew } from '../../crew/crew';
import { CrewService } from '../../crew/crew.service';
import { AircraftService } from '../../aircrafts/aircraft.service';
import { Aircraft } from '../../aircrafts/aircraft';

@Component({
  selector: 'app-departure-list',
  templateUrl: './departure-list.component.html',
  styleUrls: ['./departure-list.component.css']
})
export class DepartureListComponent implements OnInit {

  Departures : Array<Departure>;
  lastId : number;
  Crews : Array<Crew>;
  Aircrafts : Array<Aircraft>
  crewId : number;
  aircraftId : number;

  constructor(public service : DepartureService,public serviceCrew : CrewService,public serviceAircraft : AircraftService){ }

   ngOnInit(){
    this.getDepartures();
  }

  getDepartures(){
    this.service.getAllDepartures().subscribe((data : Array<Departure>) => {
    this.Departures = data;
    this.lastId = this.Departures[this.Departures.length - 1].id;
    })
    this.serviceCrew.getAllCrews().subscribe((data : Array<Crew>) => {
      this.Crews = data;});
    this.serviceAircraft.getAllAircrafts().subscribe((data : Array<Aircraft>) => {
      this.Aircrafts = data;});
  }

  createDeparture(number : string,date : string){
    let departure = new Departure(0,number,date,this.crewId,this.aircraftId);
    this.service.createDeparture(departure).subscribe();
    this.lastId++;
    departure.id = this.lastId;
    this.Departures.push(departure);
  }

  deleteDeparture(id : number){
    this.service.deleteDeparture(id).subscribe();
    this.Departures = this.Departures.filter(e => { return e.id !== id; });
  }

  updateDeparture() {
    let departure = new Departure(0,"AAA111","06-04-2017",1,1);
    this.service.updateDeparture(1,departure).subscribe();
    let temp = this.Departures.find(x => x.id == 1);
    temp.number = departure.number;
    temp.departureTime = departure.departureTime;
    temp.aircraftId = departure.aircraftId;
    temp.crewId = departure.crewId;
  }

  ChangeCrew($event){
   this.crewId = $event.id;
  }

  ChangeAircraft($event){
    this.aircraftId = $event.id;
   }

}
