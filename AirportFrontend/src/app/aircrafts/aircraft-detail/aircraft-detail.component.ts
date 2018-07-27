import { Component, OnInit } from '@angular/core';
import { Aircraft } from '../aircraft';

@Component({
  selector: 'app-aircraft-detail',
  templateUrl: './aircraft-detail.component.html',
  styleUrls: ['./aircraft-detail.component.css']
})
export class AircraftDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  updateAircraft() {
 /*    let timeSpan  = "12:00:00";
    let aircraft = new Aircraft(0,"SOS777",3,"12.06.2017",timeSpan) */
  }
}
