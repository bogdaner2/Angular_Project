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

  createAircraft(Aircraft: Aircraft){
    return this.http.post(this.url , Aircraft);
  }

  updateAircraft(id: number, Aircraft: Aircraft) {
    return this.http.put(this.url + "/" + id, Aircraft);
  }

  deleteAircraft(id)  {
    return this.http.delete(this.url + "/"+ id);
  }

  getAircraft(id : number){
    return this.http.get(this.url +"/"+id);
  }
}
