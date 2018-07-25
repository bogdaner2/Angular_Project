import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private url = "http://localhost:62444/api/flight";

  constructor(private http: HttpClient){ }
    
  getAllFlights(){     
    return this.http.get(this.url);
  }

  createFlight(flight: Flight){
    return this.http.post(this.url , flight);
  }

  updateFlight(id: number, flight: Flight) {
    return this.http.put(this.url + "/" + id, flight);
  }

deleteFlight(id)  {
    return this.http.delete(this.url + "/"+ id);
  }

  getFlight(id : number){
    return this.http.get(this.url +"/"+id);
  }
}
