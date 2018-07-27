import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';
import { Crew } from '../crew';
import { Stewardess } from '../../stewardesses/stewardess';
import { Pilot } from '../../pilots/pilot';
import { PilotService } from '../../pilots/pilot.service';
import { StewardessService } from '../../stewardesses/stewardess.service';
import { EventManager } from '../../../../node_modules/@angular/platform-browser';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {
  Crews : Array<Crew>;
  lastId : number;
  Stewardesses : Array<Stewardess>
  Pilots : Array<Pilot>
  selectedStewardesses : number [] 
  pilotID : number;
  stewardessID : number;

  constructor(public service : CrewService,
    public servicePilot : PilotService,
    public serviceStewardess : StewardessService){ }

   ngOnInit(){
    this.getCrews();
   this.selectedStewardesses = [];
  }

  getCrews(){
    this.service.getAllCrews().subscribe((data : Array<Crew>) => {
    this.Crews = data;
    this.lastId = this.Crews[this.Crews.length - 1].id;
    })
    this.servicePilot.getAllPilots().subscribe((data : Array<Pilot>) => {
      this.Pilots = data;});
    this.serviceStewardess.getAllStewardesses().subscribe((data : Array<Stewardess>) => {
      this.Stewardesses = data;});
  }

  createCrew(){
    let crew = new Crew(0,this.pilotID,this.selectedStewardesses)
    this.service.createCrew(crew).subscribe();
    this.lastId++;
    crew.id = this.lastId;
    this.Crews.push(crew);
  }

  deleteCrew(id : number){
    this.service.deleteCrew(id).subscribe();
    this.Crews = this.Crews.filter(e => { return e.id !== id; });
  }

  addStewardess(){
    this.selectedStewardesses.push(this.stewardessID);
  }

  changePilot($event){
    this.pilotID = $event.id;
  }

  changeStewardess($event){
  this.stewardessID = $event.id;
  }

}
