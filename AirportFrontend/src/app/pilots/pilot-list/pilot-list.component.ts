import { Component, OnInit } from '@angular/core';
import { PilotService } from '../pilot.service';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.component.html',
  styleUrls: ['./pilot-list.component.css']
})
export class PilotListComponent implements OnInit {

  Pilots : Array<Pilot>;
  lastId : number;

  constructor(public service : PilotService){ }

   ngOnInit(){
    this.getPilots();
  }

  getPilots(){
    this.service.getAllPilotes().subscribe((data : Array<Pilot>) => {
    this.Pilots = data;
    this.lastId = this.Pilots[this.Pilots.length - 1].id;
    })
  }

  createPilot(firstName : string, lastName : string,dateOfBirth:string,experience : number){
    let pilot = new Pilot(0,firstName,lastName,dateOfBirth,experience);
    this.service.createPilot(pilot).subscribe();
    this.lastId++;
    pilot.id = this.lastId;
    this.Pilots.push(pilot);
  }

  deletePilot(id : number){
    this.service.deletePilot(id).subscribe();
    this.Pilots = this.Pilots.filter(e => { return e.id !== id; });
  }
}
