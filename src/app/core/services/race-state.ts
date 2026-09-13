import { Injectable, signal } from '@angular/core';

import { Meeting } from '../models/meeting';
import { Session } from '../models/session';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root'
})
export class RaceStateService {

  readonly selectedMeeting =
    signal<Meeting | null>(null);

  readonly selectedSession =
    signal<Session | null>(null);

  readonly selectedDriver =
    signal<Driver | null>(null);

  setMeeting(meeting: Meeting): void {
    this.selectedMeeting.set(meeting);
  }

  setSession(session: Session): void {
    this.selectedSession.set(session);
  }

  setDriver(driver: Driver): void {
    this.selectedDriver.set(driver);
  }

  clear(): void {
    this.selectedMeeting.set(null);
    this.selectedSession.set(null);
    this.selectedDriver.set(null);
  }
}