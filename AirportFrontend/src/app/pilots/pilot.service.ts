import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Pilot } from './pilot';

@Injectable({
  providedIn: 'root'
})
export class PilotService {

  private url = "http://localhost:62444/api/pilot";

  constructor(private http: HttpClient){ }
    
  getAllPilots(){     
    return this.http.get(this.url);
  }

  createPilot(pilot: Pilot){
    return this.http.post(this.url , pilot);
  }

  updatePilot(id: number, pilot: Pilot) {
    return this.http.put(this.url + "/" + id, pilot);
  }

deletePilot(id)  {
    return this.http.delete(this.url + "/"+ id);
  }

  getPilot(id : number){
    return this.http.get(this.url +"/"+id);
  }
}
