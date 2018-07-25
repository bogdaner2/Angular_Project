import { Injectable } from '@angular/core';
import { Aircraft } from './aircraft';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AircraftService {

  private url = "http://localhost:62444/api/aircraft";

  constructor(private http: HttpClient){ }
    
  getAllAircrafts(){     
    return this.http.get(this.url);
  }

  createAircraft(aircraft: Aircraft){
    return this.http.post(this.url , aircraft);
  }

  updateAircraft(id: number, aircraft: Aircraft) {
    return this.http.put(this.url + "/" + id, aircraft);
  }

  deleteAircraft(id)  {
    return this.http.delete(this.url + "/"+ id);
  }

  getAircraft(id : number){
    return this.http.get(this.url +"/"+id);
  }
}
