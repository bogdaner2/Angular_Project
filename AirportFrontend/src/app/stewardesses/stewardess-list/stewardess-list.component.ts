import { Component, OnInit } from '@angular/core';
import { StewardessService } from '../stewardess.service';
import { Stewardess } from '../stewardess';

@Component({
  selector: 'app-stewardess-list',
  templateUrl: './stewardess-list.component.html',
  styleUrls: ['./stewardess-list.component.css']
})
export class StewardessListComponent implements OnInit {

  Stewardesses : Array<Stewardess>;
  lastId : number;

  constructor(public service : StewardessService){ }

   ngOnInit(){
    this.getStewardesss();
  }

  getStewardesss(){
    this.service.getAllStewardesses().subscribe((data : Array<Stewardess>) => {
    this.Stewardesses = data;
    this.lastId = this.Stewardesses[this.Stewardesses.length - 1].id;
    })
  }

  createStewardess(firstName : string, lastName : string,dateOfBirth:string){
    let stewardess = new Stewardess(1,firstName,lastName,dateOfBirth);
    this.service.createStewardess(stewardess).subscribe();
    this.lastId++;
    stewardess.id = this.lastId;
    this.Stewardesses.push(stewardess);
  }

  deleteStewardess(id : number){
    this.service.deleteStewardess(id).subscribe();
    this.Stewardesses = this.Stewardesses.filter(e => { return e.id !== id; });
  }

}
