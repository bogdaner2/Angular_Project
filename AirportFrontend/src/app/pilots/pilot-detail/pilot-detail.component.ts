import { Component, OnInit } from '@angular/core';
import { Pilot } from '../pilot';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { PilotService } from '../pilot.service';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {

  pilot : Pilot;
  isUpdate : boolean = false;

  constructor(public service : PilotService,private route: ActivatedRoute){

    let id = parseInt(route.snapshot.paramMap.get('id'));
    service.getPilot(id).subscribe((data : Pilot) => {
      this.pilot = data;
          })  
  }

  ngOnInit(){
  }

  updatePilot(firstName : string, lastName : string,dateOfBirth:string,experience : number) {
    if(this.isUpdate == false){
      this.isUpdate = true
      return;
    }
    let _id = this.pilot.id;
    let _pilot = new Pilot(0,firstName,lastName,dateOfBirth,experience);
    this.service.updatePilot(_id,_pilot).subscribe();
    this.pilot = _pilot;
    this.pilot.id = _id;
    this.isUpdate = false;
  }
}
