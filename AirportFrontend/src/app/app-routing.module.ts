import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketDetailComponent } from './tickets/ticket-detail/ticket-detail.component';

const routes: Routes = [
  {
    path : '',
    pathMatch : 'full',
    redirectTo : 'menu'},{
    path : 'menu/tickets/detail',
    component : TicketDetailComponent
    }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
