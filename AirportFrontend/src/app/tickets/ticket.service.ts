import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url = "http://localhost:62444/api/ticket";
  constructor(private http: HttpClient){ }
    
  getUsers(){
      return this.http.get(this.url);
  }
}
