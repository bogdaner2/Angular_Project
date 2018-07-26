import { Component, OnInit } from '@angular/core';
import { AircraftType } from '../aircraftType';
import { AircraftTypeService } from '../aircraft-type.service';

@Component({
  selector: 'app-aircraft-type-list',
  templateUrl: './aircraft-type-list.component.html',
  styleUrls: ['./aircraft-type-list.component.css']
})
export class AircraftTypeListComponent implements OnInit {

  AircraftTypes : Array<AircraftType>;
  lastId : number;

  constructor(public service : AircraftTypeService){ }

   ngOnInit(){
    this.getAllAircraftTypes();
  }

  getAllAircraftTypes(){
    this.service.getAllAircraftTypes().subscribe((data : Array<AircraftType>) => {
    this.AircraftTypes = data;
    this.lastId = this.AircraftTypes[this.AircraftTypes.length - 1].id;
    })
  }

  createAircraftType(){
    let aircraftType = new AircraftType(0,"TRD444",10,7000);
    this.service.createAircraftType(aircraftType).subscribe();
    this.lastId++;
    aircraftType.id = this.lastId;
    this.AircraftTypes.push(aircraftType);
  }

  deleteAircraftType(id : number){
    this.service.deleteAircraftType(id).subscribe();
    this.AircraftTypes = this.AircraftTypes.filter(e => { return e.id !== id; });
  }

  updateAircraftType() {
    let aircraftType = new AircraftType(0,"TRD444",100,7000);
    this.service.updateAircraftType(1,aircraftType).subscribe();
    let temp = this.AircraftTypes.find(x => x.id == 1)
    temp.model = aircraftType.model;
    temp.carryingCapacity = aircraftType.carryingCapacity;
    temp.countOfSeats = aircraftType.countOfSeats;
  }

}
