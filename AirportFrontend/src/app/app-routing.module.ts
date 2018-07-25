import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { AircraftDetailComponent } from './aircrafts/aircraft-detail/aircraft-detail.component';
import { AircraftListComponent } from './aircrafts/aircraft-list/aircraft-list.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : ""},
    {
    path : 'tickets',
    component : TicketListComponent
    },
    {
      path : 'tickets/:id',
      component : TicketDetailComponent
    },
    {
      path : 'aircrafts/:id',
      component : AircraftDetailComponent
    },
    {
      path : 'aircrafts',
      component : AircraftListComponent
    }


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
