import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketModule } from './tickets/ticket-module/ticket.module';
import { HttpClientModule } from '@angular/common/http';
import { AircraftModule } from './aircrafts/aircraft-module/aircraft.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TicketModule,
    AircraftModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
