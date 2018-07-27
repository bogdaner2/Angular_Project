import { Component, OnInit } from '@angular/core';
import { AircraftType } from '../aircraftType';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AircraftTypeService } from '../aircraft-type.service';

@Component({
  selector: 'app-aircraft-type-detail',
  templateUrl: './aircraft-type-detail.component.html',
  styleUrls: ['./aircraft-type-detail.component.css']
})
export class AircraftTypeDetailComponent implements OnInit {

  aircraftType : AircraftType;
  isUpdate : boolean = false;

  constructor(public service : AircraftTypeService,private route: ActivatedRoute){

    let id = parseInt(route.snapshot.paramMap.get('id'));
    service.getAircraftType(id).subscribe((data : AircraftType) => {
      this.aircraftType = data;
          })  
  }

  ngOnInit(){
  }

  updateAircraftType(model: string ,seats : number,  capacity : number) {
    if(this.isUpdate == false){
      this.isUpdate = true
      return;
    }
    let aircraftType = new AircraftType(0,model,seats,capacity);
    this.service.updateAircraftType(this.aircraftType.id,aircraftType).subscribe();
    this.isUpdate = false
  }
}
