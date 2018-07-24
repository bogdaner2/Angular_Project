import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'menu'},{
    path : 'menu/tickets',
    component : TicketListComponent
    },
    {
      path : 'menu/tickets/:id',
      component : TicketDetailComponent
      }


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
