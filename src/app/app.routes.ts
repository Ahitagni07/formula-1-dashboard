import { Routes } from "@angular/router";

import { DashboardComponent } from "./features/dashboard/dashboard";

import { MeetingComponent } from "./features/meeting/meeting";

import { RaceComponent } from "./features/race/race";

import { DriverComponent } from "./features/driver/driver";

import { TelemetryComponent } from "./features/telemetry/telemetry";

export const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
  },

  {
    path: "meeting/:meetingKey",
    component: MeetingComponent,
  },

  {
    path: "race/:sessionKey",
    component: RaceComponent,
  },

  {
    path: "driver/:sessionKey/:driverNumber",
    component: DriverComponent,
  },

  {
    path: "telemetry/:sessionKey/:driverNumber",
    component: TelemetryComponent,
  },

  {
    path: "**",
    redirectTo: "",
  },
];
