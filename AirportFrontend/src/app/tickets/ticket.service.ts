import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url = "http://localhost:62444/api/ticket";
  constructor(private http: HttpClient){ }
    
  getAllTickets(){
      
      return this.http.get(this.url);
  }

  createTicket(user: Ticket){
    return this.http.post(this.url, user); 
  }
  updateTicket(id: number, user: Ticket) {
    const urlParams = new HttpParams().set("id", id.toString());
    return this.http.put(this.url, user, { params: urlParams});
  }
  deleteTicket(id: number){
    const urlParams = new HttpParams().set("id", id.toString());
    return this.http.delete(this.url, { params: urlParams});
  }

  getTicket(id : number){
  return this.http.get("http://localhost:62444/api/ticket/1");
  }
}
