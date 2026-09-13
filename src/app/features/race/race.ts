import { Component, inject, signal } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";

import { OpenF1Service } from "../../core/services/openf1";

import { Driver } from "../../core/models/driver";

import { SessionResult } from "../../core/models/session-result";

import { Interval } from "../../core/models/interval";

import { PitStop } from "../../core/models/pit-stop";

import { Stint } from "../../core/models/stint";

import { Weather } from "../../core/models/weather";

import { RaceControl } from "../../core/models/race-control";

@Component({
  selector: "app-race",

  standalone: true,

  imports: [],

  templateUrl: "./race.html",

  styleUrl: "./race.scss",
})
export class RaceComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly router = inject(Router);

  private readonly openF1 = inject(OpenF1Service);

  readonly sessionKey = signal(0);

  readonly drivers = signal<Driver[]>([]);

  readonly results = signal<SessionResult[]>([]);

  readonly intervals = signal<Interval[]>([]);

  readonly pitStops = signal<PitStop[]>([]);

  readonly stints = signal<Stint[]>([]);

  readonly weather = signal<Weather[]>([]);

  readonly raceControl = signal<RaceControl[]>([]);

  readonly loading = signal(true);

  constructor() {
    const key = Number(this.route.snapshot.paramMap.get("sessionKey"));

    this.sessionKey.set(key);

    this.loadRace(key);
  }

  private loadRace(sessionKey: number): void {
    this.loading.set(true);

    this.openF1
      .getDrivers(sessionKey)
      .subscribe((data) => this.drivers.set(data));

    this.openF1
      .getSessionResults(sessionKey)
      .subscribe((data) =>
        this.results.set(data.sort((a, b) => a.position - b.position)),
      );

    this.openF1
      .getIntervals(sessionKey)
      .subscribe((data) => this.intervals.set(data));

    this.openF1
      .getPitStops(sessionKey)
      .subscribe((data) => this.pitStops.set(data));

    this.openF1
      .getStints(sessionKey)
      .subscribe((data) => this.stints.set(data));

    this.openF1
      .getWeather(sessionKey)
      .subscribe((data) => this.weather.set(data));

    this.openF1.getRaceControl(sessionKey).subscribe((data) => {
      this.raceControl.set(data.slice(-20).reverse());

      this.loading.set(false);
    });
  }

  getDriver(driverNumber: number): Driver | undefined {
    return this.drivers().find(
      (driver) => driver.driver_number === driverNumber,
    );
  }

  getLatestInterval(driverNumber: number): Interval | undefined {
    const data = this.intervals().filter(
      (interval) => interval.driver_number === driverNumber,
    );

    return data[data.length - 1];
  }

  getDriverStints(driverNumber: number): Stint[] {
    return this.stints().filter(
      (stint) => stint.driver_number === driverNumber,
    );
  }

  getDriverPitStops(driverNumber: number): PitStop[] {
    return this.pitStops().filter((pit) => pit.driver_number === driverNumber);
  }

  openDriver(driver: Driver): void {
    this.router.navigate(["/driver", this.sessionKey(), driver.driver_number]);
  }
}