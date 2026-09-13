import { Component, inject, signal } from "@angular/core";

import { Router } from "@angular/router";

import { OpenF1Service } from "../../core/services/openf1";

import { Meeting } from "../../core/models/meeting";

import { DatePipe } from '@angular/common';

@Component({
  selector: "app-dashboard",

  standalone: true,

  imports: [DatePipe],

  templateUrl: "./dashboard.html",

  styleUrl: "./dashboard.scss",
})
export class DashboardComponent {
  private readonly openF1 = inject(OpenF1Service);

  private readonly router = inject(Router);

  readonly year = signal(2026);

  readonly meetings = signal<Meeting[]>([]);

  readonly loading = signal(false);

  readonly error = signal("");

  constructor() {
    this.loadMeetings();
  }

  loadMeetings(): void {
    this.loading.set(true);

    this.error.set("");

    this.openF1.getMeetings(this.year()).subscribe({
      next: (meetings) => {
        this.meetings.set(meetings);

        this.loading.set(false);
      },

      error: (error) => {
        console.error(error);

        this.error.set("Unable to load Formula 1 meetings.");

        this.loading.set(false);
      },
    });
  }

  selectMeeting(meeting: Meeting): void {
    this.router.navigate(["/meeting", meeting.meeting_key]);
  }
}
