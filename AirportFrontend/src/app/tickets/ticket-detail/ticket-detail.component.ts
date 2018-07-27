import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
  providers: [TicketService]
})

export class TicketDetailComponent implements OnInit {

  ticket : Ticket;
  isUpdate : boolean = false;

  constructor(public service : TicketService,private route: ActivatedRoute){

    let id = parseInt(route.snapshot.paramMap.get('id'));
    service.getTicket(id).subscribe((data : Ticket) => {
      this.ticket = data;
          })  
  }

  ngOnInit(){
  }

  updateTicket(number : string , price : number) {
    if(this.isUpdate == false){
      this.isUpdate = true
      return;
    }
    let _ticket = new Ticket(0,price,number);
    let _id = this.ticket.id;
    this.service.updateTicket(_id,_ticket).subscribe();
    this.ticket = _ticket;
    this.ticket.id = _id;
    this.isUpdate = false
  }

}
