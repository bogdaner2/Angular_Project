import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Stewardess } from './stewardess';

@Injectable({
  providedIn: 'root'
})
export class StewardessService {

  private url = "http://localhost:62444/api/stewardess";

  constructor(private http: HttpClient){ }
    
  getAllStewardesses(){     
    return this.http.get(this.url);
  }

  createStewardess(stewardess: Stewardess){
    return this.http.post(this.url , stewardess);
  }

  updateStewardess(id: number, stewardess: Stewardess) {
    return this.http.put(this.url + "/" + id, stewardess);
  }

deleteStewardess(id)  {
    return this.http.delete(this.url + "/"+ id);
  }

  getStewardess(id : number){
    return this.http.get(this.url +"/"+id);
  }
}
