import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketModule } from './tickets/ticket-module/ticket.module';
import { HttpClientModule } from '@angular/common/http';
import { AircraftModule } from './aircrafts/aircraft-module/aircraft.module';
import { StewardessModule } from './stewardesses/stewardess-module/stewardess.module';
import { PilotModule } from './pilots/pilot-module/pilot.module';
import { AircraftTypeModule } from './aircraft-types/aircraft-type-module/aircraft-type.module';
import { CrewModule } from './crew/crew-module/crew.module';

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
    CrewModule,
    AircraftTypeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
