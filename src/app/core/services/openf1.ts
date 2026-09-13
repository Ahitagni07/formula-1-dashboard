import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Meeting } from '../models/meeting';
import { Session } from '../models/session';
import { Driver } from '../models/driver';
import { Lap } from '../models/lap';
import { CarData } from '../models/car-data';
import { Position } from '../models/position';
import { Interval } from '../models/interval';
import { PitStop } from '../models/pit-stop';
import { Stint } from '../models/stint';
import { Weather } from '../models/weather';
import { RaceControl } from '../models/race-control';
import { SessionResult } from '../models/session-result';

@Injectable({
  providedIn: 'root'
})
export class OpenF1Service {

  private readonly http = inject(HttpClient);

  private readonly baseUrl =
    'https://api.openf1.org/v1';

  // -------------------------
  // Meetings
  // -------------------------

  getMeetings(year: number): Observable<Meeting[]> {

    const params = new HttpParams()
      .set('year', year);

    return this.http.get<Meeting[]>(
      `${this.baseUrl}/meetings`,
      { params }
    );
  }

  // -------------------------
  // Sessions
  // -------------------------

  getSessions(year: number): Observable<Session[]> {

    const params = new HttpParams()
      .set('year', year);

    return this.http.get<Session[]>(
      `${this.baseUrl}/sessions`,
      { params }
    );
  }

  getSessionsForMeeting(
    meetingKey: number
  ): Observable<Session[]> {

    const params = new HttpParams()
      .set('meeting_key', meetingKey);

    return this.http.get<Session[]>(
      `${this.baseUrl}/sessions`,
      { params }
    );
  }

  // -------------------------
  // Drivers
  // -------------------------

  getDrivers(
    sessionKey: number
  ): Observable<Driver[]> {

    const params = new HttpParams()
      .set('session_key', sessionKey);

    return this.http.get<Driver[]>(
      `${this.baseUrl}/drivers`,
      { params }
    );
  }

  // -------------------------
  // Laps
  // -------------------------

  getLaps(
    sessionKey: number,
    driverNumber?: number
  ): Observable<Lap[]> {

    let params = new HttpParams()
      .set('session_key', sessionKey);

    if (driverNumber !== undefined) {
      params = params.set(
        'driver_number',
        driverNumber
      );
    }

    return this.http.get<Lap[]>(
      `${this.baseUrl}/laps`,
      { params }
    );
  }

  // -------------------------
  // Car telemetry
  // -------------------------

  getCarData(
    sessionKey: number,
    driverNumber: number
  ): Observable<CarData[]> {

    const params = new HttpParams()
      .set('session_key', sessionKey)
      .set('driver_number', driverNumber);

    return this.http.get<CarData[]>(
      `${this.baseUrl}/car_data`,
      { params }
    );
  }

  // -------------------------
  // Position
  // -------------------------

  getPositions(
    sessionKey: number,
    driverNumber?: number
  ): Observable<Position[]> {

    let params = new HttpParams()
      .set('session_key', sessionKey);

    if (driverNumber !== undefined) {
      params = params.set(
        'driver_number',
        driverNumber
      );
    }

    return this.http.get<Position[]>(
      `${this.baseUrl}/position`,
      { params }
    );
  }

  // -------------------------
  // Intervals
  // -------------------------

  getIntervals(
    sessionKey: number
  ): Observable<Interval[]> {

    const params = new HttpParams()
      .set('session_key', sessionKey);

    return this.http.get<Interval[]>(
      `${this.baseUrl}/intervals`,
      { params }
    );
  }

  // -------------------------
  // Pit stops
  // -------------------------

  getPitStops(
    sessionKey: number
  ): Observable<PitStop[]> {

    const params = new HttpParams()
      .set('session_key', sessionKey);

    return this.http.get<PitStop[]>(
      `${this.baseUrl}/pit`,
      { params }
    );
  }

  // -------------------------
  // Stints
  // -------------------------

  getStints(
    sessionKey: number
  ): Observable<Stint[]> {

    const params = new HttpParams()
      .set('session_key', sessionKey);

    return this.http.get<Stint[]>(
      `${this.baseUrl}/stints`,
      { params }
    );
  }

  // -------------------------
  // Weather
  // -------------------------

  getWeather(
    sessionKey: number
  ): Observable<Weather[]> {

    const params = new HttpParams()
      .set('session_key', sessionKey);

    return this.http.get<Weather[]>(
      `${this.baseUrl}/weather`,
      { params }
    );
  }

  // -------------------------
  // Race control
  // -------------------------

  getRaceControl(
    sessionKey: number
  ): Observable<RaceControl[]> {

    const params = new HttpParams()
      .set('session_key', sessionKey);

    return this.http.get<RaceControl[]>(
      `${this.baseUrl}/race_control`,
      { params }
    );
  }

  // -------------------------
  // Session result
  // -------------------------

  getSessionResults(
    sessionKey: number
  ): Observable<SessionResult[]> {

    const params = new HttpParams()
      .set('session_key', sessionKey);

    return this.http.get<SessionResult[]>(
      `${this.baseUrl}/session_result`,
      { params }
    );
  }
}