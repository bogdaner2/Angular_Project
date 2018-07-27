import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { AircraftType } from './aircraftType';

@Injectable({
  providedIn: 'root'
})
export class AircraftTypeService {
    
    private url = "http://localhost:62444/api/aircrafttype";
  
    constructor(private http: HttpClient){ }
      
    getAllAircraftTypes(){     
      return this.http.get(this.url);
    }
  
    createAircraftType(aircraftType: AircraftType){
      return this.http.post(this.url , aircraftType);
    }
  
    updateAircraftType(id: number, aircraftType: AircraftType) {
      return this.http.put(this.url + "/" + id, aircraftType);
    }
  
    deleteAircraftType(id)  {
      return this.http.delete(this.url + "/"+ id);
    }
  
    getAircraftType(id : number){
      return this.http.get(this.url +"/"+id);
    }
  }

