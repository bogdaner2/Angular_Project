import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../aircraft.service';
import { Aircraft } from '../aircraft';
import { AircraftType } from '../../aircraft-types/aircraftType';
import { AircraftTypeService } from '../../aircraft-types/aircraft-type.service';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css'],
  providers : [AircraftService]
})
export class AircraftListComponent implements OnInit {

  Aircrafts : Array<Aircraft>;
  Types : Array<AircraftType>;
  typeId :number;
  lastId : number;

  constructor(public service : AircraftService,public serviceType : AircraftTypeService){ }

   ngOnInit(){
    this.getAircrafts();
  }

  getAircrafts(){
    this.service.getAllAircrafts().subscribe((data : Array<Aircraft>) => {
    this.Aircrafts = data;
    this.lastId = this.Aircrafts[this.Aircrafts.length - 1].id;
    })
    this.serviceType.getAllAircraftTypes().subscribe((data : Array<AircraftType>) => {
    this.Types = data;
    })
  }

  createAircraft(name : string , releaseTime : string,lifetime : string){
    let aircraft = new Aircraft(0,name,this.typeId,releaseTime,lifetime+":00:00.999999")
    console.log(aircraft);
    this.service.createAircraft(aircraft).subscribe();
    this.lastId++;
    aircraft.id = this.lastId;
    this.Aircrafts.push(aircraft); 
  }

  deleteAircraft(id : number){
    this.service.deleteAircraft(id).subscribe();
    this.Aircrafts = this.Aircrafts.filter(e => { return e.id !== id; }); 
  }

  ChangeType($event){
    this.typeId = $event.id;
   }

}
