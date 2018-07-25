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
    })
  }

  createAircraft(){
   /*  let Aircraft = new Aircraft(0,1000,"NUM344")
    this.service.createAircraft(Aircraft).subscribe();
    this.lastId += 1;
    Aircraft.id = this.lastId;
    this.Aircrafts.push(Aircraft); */
  }

  deleteAircraft(id : number){
   /*  this.service.deleteAircraft(id).subscribe();
    this.Aircrafts = this.Aircrafts.filter(e => { return e.id !== id; }); */
  }

  updateAircraft() {
    /* let Aircraft = new Aircraft(4,999,"TESTЕST111");
    this.service.updateAircraft(4,Aircraft).subscribe();
    let Aircraft2 = this.Aircrafts.find(x => x.id == 4) */
  }


}
