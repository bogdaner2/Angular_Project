import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Crew } from './crew';

@Injectable({
  providedIn: 'root'
})
export class CrewService {

  private url = "http://localhost:62444/api/crew";

  constructor(private http: HttpClient){ }
    
  getAllCrews(){     
    return this.http.get(this.url);
  }

  createCrew(crew: Crew){
    return this.http.post(this.url , crew);
  }

  updateCrew(id: number, crew: Crew) {
    return this.http.put(this.url + "/" + id, crew);
  }

deleteCrew(id)  {
    return this.http.delete(this.url + "/"+ id);
  }

  getCrew(id : number){
    return this.http.get(this.url +"/"+id);
  }
}

