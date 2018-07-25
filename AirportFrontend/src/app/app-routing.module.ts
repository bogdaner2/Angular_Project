import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { AircraftDetailComponent } from './aircrafts/aircraft-detail/aircraft-detail.component';
import { AircraftListComponent } from './aircrafts/aircraft-list/aircraft-list.component';
import { StewardessListComponent } from './stewardesses/stewardess-list/stewardess-list.component';
import { StewardessDetailComponent } from './stewardesses/stewardess-detail/stewardess-detail.component';
import { PilotListComponent } from './pilots/pilot-list/pilot-list.component';
import { PilotDetailComponent } from './pilots/pilot-detail/pilot-detail.component';
import { AircraftTypeListComponent } from './aircraft-types/aircraft-type-list/aircraft-type-list.component';
import { AircraftTypeDetailComponent } from './aircraft-types/aircraft-type-detail/aircraft-type-detail.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : ""},{
    path : 'tickets',
    component : TicketListComponent
    },{
      path : 'tickets/:id',
      component : TicketDetailComponent
    },{
      path : 'aircrafts/:id',
      component : AircraftDetailComponent
    },{
      path : 'aircrafts',
      component : AircraftListComponent
    },{
      path : 'stewardesses',
      component : StewardessListComponent
    },{
      path : 'stewardesses/:id',
      component : StewardessDetailComponent
    },{
      path : 'pilots',
      component : PilotListComponent
    },{
      path : 'pilots/:id',
      component : PilotDetailComponent
    },{
      path : 'aircrafttypes',
      component : AircraftTypeListComponent
    },{
      path : 'aircrafttypes/:id',
      component : AircraftTypeDetailComponent
    }


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
