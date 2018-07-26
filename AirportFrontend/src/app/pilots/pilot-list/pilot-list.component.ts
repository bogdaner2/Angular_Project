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

  createPilot(){
    let pilot = new Pilot(1,"Luska","Petrova","10.06.2018",5);
    this.service.createPilot(pilot).subscribe();
    this.lastId++;
    pilot.id = this.lastId;
    this.Pilots.push(pilot);
  }

  deletePilot(id : number){
    this.service.deletePilot(id).subscribe();
    this.Pilots = this.Pilots.filter(e => { return e.id !== id; });
  }

  updatePilot() {
    let pilot = new Pilot(1,"Luska","Petrova","10.06.2018",5);
    this.service.updatePilot(1,pilot).subscribe();
    let temp = this.Pilots.find(x => x.id == 1);
    temp.firstName = pilot.firstName;
    temp.lastName = pilot.lastName;
    temp.dateOfBirth = pilot.dateOfBirth;
    temp.experience = pilot.experience;
  }

}
