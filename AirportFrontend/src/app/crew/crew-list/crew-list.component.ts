import { Component, OnInit } from '@angular/core';
import { CrewService } from '../crew.service';
import { Crew } from '../crew';

@Component({
  selector: 'app-crew-list',
  templateUrl: './crew-list.component.html',
  styleUrls: ['./crew-list.component.css']
})
export class CrewListComponent implements OnInit {
  Crews : Array<Crew>;
  lastId : number;

  constructor(public service : CrewService){ }

   ngOnInit(){
    this.getCrews();
  }

  getCrews(){
    this.service.getAllCrews().subscribe((data : Array<Crew>) => {
    this.Crews = data;
    this.lastId = this.Crews[this.Crews.length - 1].id;
    })
  }

  createCrew(){
    let crew = new Crew(0,1,[1,2])
    this.service.createCrew(crew).subscribe();
    this.lastId += 1;
    crew.id = this.lastId;
    this.Crews.push(crew);
  }

  deleteCrew(id : number){
    this.service.deleteCrew(id).subscribe();
    this.Crews = this.Crews.filter(e => { return e.id !== id; });
  }

  updateCrew() {
    let crew = new Crew(0,1,[1,2]);
    this.service.updateCrew(1,crew).subscribe();
    let temp = this.Crews.find(x => x.id == 1)
    temp.pilotId= crew.pilotId;
    temp.stewardessesId = crew.stewardessesId;
  }

}
