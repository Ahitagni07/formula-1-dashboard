import { Component, computed, inject, signal } from "@angular/core";

import { ActivatedRoute, RouterLink } from "@angular/router";

import { OpenF1Service } from "../../core/services/openf1";

import { Driver } from "../../core/models/driver";

import { Lap } from "../../core/models/lap";

import { Stint } from "../../core/models/stint";

import { DecimalPipe } from '@angular/common';

@Component({
  selector: "app-driver",

  standalone: true,

  imports: [RouterLink, DecimalPipe],

  templateUrl: "./driver.html",

  styleUrl: "./driver.scss",
})
export class DriverComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly openF1 = inject(OpenF1Service);

  readonly sessionKey = signal(0);

  readonly driverNumber = signal(0);

  readonly driver = signal<Driver | null>(null);

  readonly laps = signal<Lap[]>([]);

  readonly stints = signal<Stint[]>([]);

  readonly loading = signal(true);

  readonly bestLap = computed(() => {
    const durations = this.laps()

      .map((lap) => lap.lap_duration)

      .filter(
        (value): value is number => value !== null && value !== undefined,
      );

    return durations.length ? Math.min(...durations) : null;
  });

  constructor() {
    const sessionKey = Number(this.route.snapshot.paramMap.get("sessionKey"));

    const driverNumber = Number(
      this.route.snapshot.paramMap.get("driverNumber"),
    );

    this.sessionKey.set(sessionKey);

    this.driverNumber.set(driverNumber);

    this.loadDriver(sessionKey, driverNumber);
  }

  private loadDriver(sessionKey: number, driverNumber: number): void {
    this.openF1.getDrivers(sessionKey).subscribe((drivers) => {
      const driver = drivers.find((d) => d.driver_number === driverNumber);

      this.driver.set(driver ?? null);
    });

    this.openF1.getLaps(sessionKey, driverNumber).subscribe((laps) => {
      this.laps.set(laps);

      this.loading.set(false);
    });

    this.openF1.getStints(sessionKey).subscribe((stints) => {
      this.stints.set(stints.filter((s) => s.driver_number === driverNumber));
    });
  }
}
