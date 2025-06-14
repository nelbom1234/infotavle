import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { Departures } from './interfaces/rejseplanen/departures';

@Injectable({
  providedIn: 'root'
})
export class RejseplanenService {
  private baseUrl = 'rejseplanen.dk/api';
  private lon = 'originCoordLong=12.458394';
  private lat = 'originCoordLat=55.613850';
  private key = import.meta.env.NG_APP_REJSEPLANEN_KEY;
  private url = '';
  private http = inject(HttpClient);


  constructor() { }

  //pulls departures from the rejseplanen api and forwards the data
  getDepartures() : Observable<Departures> {
    let duration = 'duration=40';
    let maxJourneys = "maxJourneys=10";
    this.url = `http://${this.baseUrl}/nearbyDepartureBoard?accessId=${this.key}&${this.lon}&${this.lat}&${duration}&${maxJourneys}&format=json`;
    return this.http.get<Departures>(this.url);
  }
}
