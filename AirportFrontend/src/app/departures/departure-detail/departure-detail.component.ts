import { Component, OnInit } from '@angular/core';
import { Departure } from '../departure';
import { DepartureService } from '../departure.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Crew } from '../../crew/crew';
import { CrewService } from '../../crew/crew.service';
import { Aircraft } from '../../aircrafts/aircraft';
import { AircraftService } from '../../aircrafts/aircraft.service';
import { VirtualTimeScheduler } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-departure-detail',
  templateUrl: './departure-detail.component.html',
  styleUrls: ['./departure-detail.component.css']
})
export class DepartureDetailComponent implements OnInit {

  departure : Departure;
  isUpdate : boolean = false;
  crews : Array<Crew>;
  aircrafts : Array<Aircraft>;
  crewId: number;
  aircraftId: number;

  constructor(
    public service : DepartureService,
    public serviceCrew : CrewService,
    public serviceAircraft : AircraftService,
    private route: ActivatedRoute){

    let id = parseInt(route.snapshot.paramMap.get('id'));
    service.getDeparture(id).subscribe((data : Departure) => {
      this.departure = data;
          })
    serviceCrew.getAllCrews().subscribe((data : Array<Crew>) => {
      this.crews = data;
          })
    serviceAircraft.getAllAircrafts().subscribe((data : Array<Aircraft>) => {
          this.aircrafts = data;
          })              
  }

  ngOnInit(){
  }

  updateDeparture(number : string,time : string) {
    if(this.isUpdate == false){
      this.isUpdate = true
      return;
    }
    let _departure = new Departure(0,number,time,this.crewId,this.aircraftId);
    let _id = this.departure.id;
    this.service.updateDeparture(_id,_departure).subscribe();
    this.departure = _departure;
    this.departure.id = _id;
    this.isUpdate = false
  }

  ChangeCrew($event){
    this.crewId = $event.id;
   }
 
   ChangeAircraft($event){
     this.aircraftId = $event.id;
    }
 
}
