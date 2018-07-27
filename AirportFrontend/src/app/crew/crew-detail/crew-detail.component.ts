import { Component, OnInit } from '@angular/core';
import { Crew } from '../crew';
import { CrewService } from '../crew.service';
import { PilotService } from '../../pilots/pilot.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { StewardessService } from '../../stewardesses/stewardess.service';
import { Stewardess } from '../../stewardesses/stewardess';
import { Pilot } from '../../pilots/pilot';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.css']
})
export class CrewDetailComponent implements OnInit {

  crew : Crew;
  isUpdate : boolean = false;
  stewardesses : Array<Stewardess>;
  pilots : Array<Pilot>;
  pilotId : number;
  selectedStewardesses = [];
  stewId: number;

  constructor(
    public service : CrewService,
    public servicePilot : PilotService,
    public serviceStew : StewardessService,
    private route: ActivatedRoute){

    let id = parseInt(route.snapshot.paramMap.get('id'));
    service.getCrew(id).subscribe((data : Crew) => {
      this.crew = data;
          })
    serviceStew.getAllStewardesses().subscribe((data : Array<Stewardess>) => {
      this.stewardesses = data;
          })
    servicePilot.getAllPilots().subscribe((data : Array<Pilot>) => {
          this.pilots= data;
          })              
  }

  ngOnInit(){
    this.selectedStewardesses = [];
  }

  updateCrew() {
    if(this.isUpdate == false){
      this.isUpdate = true
      return;
    }
    let _crew = new Crew(0,this.pilotId,this.selectedStewardesses);
    let _id = this.crew.id;
    this.service.updateCrew(_id,_crew).subscribe();
    this.crew = _crew;
    this.crew.id = _id;
    this.selectedStewardesses = [];
    this.isUpdate = false
  }

  changePilot($event){
    this.pilotId = $event.id;
   }
 
   changeStewardess($event){
     this.stewId = $event.id;
    }

    addStewardess(){
      this.selectedStewardesses.push(this.stewId);
    }
}
