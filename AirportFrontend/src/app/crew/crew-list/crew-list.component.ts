import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';
import { Crew } from '../crew';
import { Stewardess } from '../../stewardesses/stewardess';
import { Pilot } from '../../pilots/pilot';
import { PilotService } from '../../pilots/pilot.service';
import { StewardessService } from '../../stewardesses/stewardess.service';

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
  SelectedStewardesses : Array<number>
  pilotID : number;

  constructor(public service : CrewService,
    public servicePilot : PilotService,
    public serviceStewardess : StewardessService){ }

   ngOnInit(){
    this.getCrews();
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
    let crew = new Crew(0,this.pilotID,this.SelectedStewardesses)
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

  }

  changePilot($event){

  }

}
