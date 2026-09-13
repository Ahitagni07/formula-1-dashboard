import {
  Component,
  inject,
  signal
} from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  OpenF1Service
} from '../../core/services/openf1';

import {
  Meeting
} from '../../core/models/meeting';

import {
  Session
} from '../../core/models/session';

import {
  DatePipe
} from '@angular/common';

@Component({

  selector: 'app-meeting',

  standalone: true,

  imports: [
    DatePipe
  ],

  templateUrl: './meeting.html',

  styleUrl: './meeting.scss'

})
export class MeetingComponent {

  private readonly route =
    inject(ActivatedRoute);

  private readonly router =
    inject(Router);

  private readonly openF1 =
    inject(OpenF1Service);

  readonly meeting =
    signal<Meeting | null>(null);

  readonly sessions =
    signal<Session[]>([]);

  readonly loading =
    signal(false);

  constructor() {

    const meetingKey = Number(
      this.route.snapshot.paramMap.get(
        'meetingKey'
      )
    );

    this.loadMeeting(meetingKey);

    this.loadSessions(meetingKey);

  }

  private loadMeeting(
    meetingKey: number
  ): void {

    this.openF1
      .getMeetings(2026)
      .subscribe(meetings => {

        const result =
          meetings.find(
            meeting =>
              meeting.meeting_key === meetingKey
          );

        this.meeting.set(
          result ?? null
        );

      });

  }

  private loadSessions(
    meetingKey: number
  ): void {

    this.loading.set(true);

    this.openF1
      .getSessionsForMeeting(meetingKey)
      .subscribe({

        next: sessions => {

          this.sessions.set(sessions);

          this.loading.set(false);

        },

        error: error => {

          console.error(error);

          this.loading.set(false);

        }

      });

  }

  openSession(
    session: Session
  ): void {

    this.router.navigate([
      '/race',
      session.session_key
    ]);

  }

}