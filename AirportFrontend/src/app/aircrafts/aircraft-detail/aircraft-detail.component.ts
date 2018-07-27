import { Component, OnInit } from '@angular/core';
import { Aircraft } from '../aircraft';
import { AircraftTypeService } from '../../aircraft-types/aircraft-type.service';
import { AircraftService } from '../aircraft.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { AircraftType } from '../../aircraft-types/aircraftType';

@Component({
  selector: 'app-aircraft-detail',
  templateUrl: './aircraft-detail.component.html',
  styleUrls: ['./aircraft-detail.component.css']
})
export class AircraftDetailComponent implements OnInit {
  Aircraft : Aircraft;
  isUpdate : boolean = false;
  Types : Array<AircraftType>;
  typeId: number;

  constructor(
    public service : AircraftService,
    public serviceType: AircraftTypeService,
    private route: ActivatedRoute){

    let id = parseInt(route.snapshot.paramMap.get('id'));
    service.getAircraft(id).subscribe((data : Aircraft) => {
      this.Aircraft = data;
          })
    serviceType.getAllAircraftTypes().subscribe((data : Array<AircraftType>) => {
      this.Types = data;
          })      
  }

  ngOnInit(){
  }

  updateAircraft(name : string,releaseTime : string,lifetime : string) {
    if(this.isUpdate == false){
      this.isUpdate = true
      return;
    }
    let _Aircraft = new Aircraft(0,name,this.typeId,releaseTime,lifetime);
    let _id = this.Aircraft.id;
    this.service.updateAircraft(_id,_Aircraft).subscribe();
    this.Aircraft = _Aircraft;
    this.Aircraft.id = _id;
    this.isUpdate = false
  }

  ChangeType($event){
    this.typeId = $event.id;
   }
 
}
