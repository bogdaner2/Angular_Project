import { Component, OnInit } from '@angular/core';
import { Stewardess } from '../stewardess';
import { StewardessService } from '../stewardess.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-stewardess-detail',
  templateUrl: './stewardess-detail.component.html',
  styleUrls: ['./stewardess-detail.component.css']
})
export class StewardessDetailComponent implements OnInit {

  stewardess : Stewardess;
  isUpdate : boolean = false;

  constructor(public service : StewardessService,private route: ActivatedRoute){

    let id = parseInt(route.snapshot.paramMap.get('id'));
    service.getStewardess(id).subscribe((data : Stewardess) => {
      this.stewardess = data;
          })  
  }

  ngOnInit(){
  }

  updateStewardess(firstName : string ,lastName : string,  dateOfBirth : string) {
    if(this.isUpdate == false){
      this.isUpdate = true
      return;
    }
    let stewardess = new Stewardess(0,firstName,lastName,dateOfBirth);
    this.service.updateStewardess(this.stewardess.id,stewardess).subscribe();
    this.isUpdate = false
  }

}
