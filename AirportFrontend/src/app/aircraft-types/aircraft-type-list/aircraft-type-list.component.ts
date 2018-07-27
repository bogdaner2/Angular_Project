import { Component, OnInit } from '@angular/core';
import { AircraftType } from '../aircraftType';
import { AircraftTypeService } from '../aircraft-type.service';

@Component({
  selector: 'app-aircraft-type-list',
  templateUrl: './aircraft-type-list.component.html',
  styleUrls: ['./aircraft-type-list.component.css']
})
export class AircraftTypeListComponent implements OnInit {

  aircraftTypes : Array<AircraftType>;
  lastId : number;

  constructor(public service : AircraftTypeService){ }

   ngOnInit(){
    this.getAllAircraftTypes();
  }

  getAllAircraftTypes(){
    this.service.getAllAircraftTypes().subscribe((data : Array<AircraftType>) => {
    this.aircraftTypes = data;
    this.lastId = this.aircraftTypes[this.aircraftTypes.length - 1].id;
    })
  }

  createAircraftType(model : string,seats: number,capacity : number){
    let aircraftType = new AircraftType(0,model,seats,capacity);
    this.service.createAircraftType(aircraftType).subscribe();
    this.lastId++;
    aircraftType.id = this.lastId;
    this.aircraftTypes.push(aircraftType);
  }

  deleteAircraftType(id : number){
    this.service.deleteAircraftType(id).subscribe();
    this.aircraftTypes = this.aircraftTypes.filter(e => { return e.id !== id; });
  }
}
