import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../aircraft.service';
import { Aircraft } from '../aircraft';

@Component({
  selector: 'app-aircraft-list',
  templateUrl: './aircraft-list.component.html',
  styleUrls: ['./aircraft-list.component.css'],
  providers : [AircraftService]
})
export class AircraftListComponent implements OnInit {

  Aircrafts : Array<Aircraft>;
  lastId : number;

  constructor(public service : AircraftService){ }

   ngOnInit(){
    this.getAircrafts();
  }

  getAircrafts(){
    this.service.getAllAircrafts().subscribe((data : Array<Aircraft>) => {
    this.Aircrafts = data;
    this.lastId = this.Aircrafts[this.Aircrafts.length - 1].id;
    })
  }

  createAircraft(){
    let timeSpan  = "20:00:00";
    let aircraft = new Aircraft(0,"ARM273",3,"12.06.2000",timeSpan)
    this.service.createAircraft(aircraft).subscribe(x => console.log(x));
    this.lastId += 1;
    aircraft.id = this.lastId;
    aircraft.lifetime = timeSpan.slice(0,2);
    this.Aircrafts.push(aircraft); 
  }

  deleteAircraft(id : number){
    this.service.deleteAircraft(id).subscribe();
    this.Aircrafts = this.Aircrafts.filter(e => { return e.id !== id; }); 
  }

  updateAircraft() {
    let timeSpan  = "12:00:00";
    let aircraft = new Aircraft(0,"SOS777",3,"12.06.2017",timeSpan)
    this.service.updateAircraft(1,aircraft).subscribe();
    let temp = this.Aircrafts.find(x => x.id == 1);
    temp.name = aircraft.name;
    temp.lifetime = aircraft.lifetime;
    temp.releseDate = aircraft.releseDate;
    temp.typeId = aircraft.typeId;   
  }


}
