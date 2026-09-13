import { Component, computed, inject, signal } from "@angular/core";

import { ActivatedRoute } from "@angular/router";

import { OpenF1Service } from "../../core/services/openf1";

import { CarData } from "../../core/models/car-data";

import { DatePipe } from '@angular/common';

@Component({
  selector: "app-telemetry",

  standalone: true,

  imports: [DatePipe],

  templateUrl: "./telemetry.html",

  styleUrl: "./telemetry.scss",
})
export class TelemetryComponent {
  private readonly route = inject(ActivatedRoute);

  private readonly openF1 = inject(OpenF1Service);

  readonly sessionKey = signal(0);

  readonly driverNumber = signal(0);

  readonly telemetry = signal<CarData[]>([]);

  readonly loading = signal(true);

  readonly maxSpeed = computed(() => {
    const values = this.telemetry().map((data) => data.speed);

    return values.length ? Math.max(...values) : 0;
  });

  readonly maxRpm = computed(() => {
    const values = this.telemetry().map((data) => data.rpm);

    return values.length ? Math.max(...values) : 0;
  });

  constructor() {
    const sessionKey = Number(this.route.snapshot.paramMap.get("sessionKey"));

    const driverNumber = Number(
      this.route.snapshot.paramMap.get("driverNumber"),
    );

    this.sessionKey.set(sessionKey);

    this.driverNumber.set(driverNumber);

    this.loadTelemetry(sessionKey, driverNumber);
  }

  private loadTelemetry(sessionKey: number, driverNumber: number): void {
    this.openF1.getCarData(sessionKey, driverNumber).subscribe({
      next: (data) => {
        this.telemetry.set(data);

        this.loading.set(false);
      },

      error: (error) => {
        console.error(error);

        this.loading.set(false);
      },
    });
  }
}
