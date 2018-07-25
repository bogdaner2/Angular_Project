import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Departure } from './departure';

@Injectable({
  providedIn: 'root'
})
export class DepartureService {

  private url = "http://localhost:62444/api/departure";

  constructor(private http: HttpClient){ }
    
  getAllDepartures(){     
    return this.http.get(this.url);
  }

  createDeparture(departure: Departure){
    return this.http.post(this.url , departure);
  }

  updateDeparture(id: number, departure: Departure) {
    return this.http.put(this.url + "/" + id, departure);
  }

deleteDeparture(id)  {
    return this.http.delete(this.url + "/"+ id);
  }

  getDeparture(id : number){
    return this.http.get(this.url +"/"+id);
  }
}
