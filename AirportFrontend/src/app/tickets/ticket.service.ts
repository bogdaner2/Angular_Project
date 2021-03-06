import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
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

  createTicket(ticket: Ticket){
    return this.http.post(this.url , ticket);
  }

  updateTicket(id: number, ticket: Ticket) {
    return this.http.put(this.url + "/" + id, ticket);
  }

deleteTicket(id)  {
    return this.http.delete(this.url + "/"+ id);
  }

  getTicket(id : number){
    return this.http.get(this.url +"/"+id);
  }
}
