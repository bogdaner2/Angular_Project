import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketModule } from './tickets/ticket-module/ticket.module';
import { HttpClientModule } from '@angular/common/http';
import { AircraftModule } from './aircrafts/aircraft-module/aircraft.module';
import { StewardessModule } from './stewardesses/stewardess-module/stewardess.module';
import { PilotModule } from './pilots/pilot/pilot.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TicketModule,
    AircraftModule,
    StewardessModule,
    PilotModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
