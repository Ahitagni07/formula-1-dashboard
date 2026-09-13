export interface Lap {
  date_start: string;

  driver_number: number;

  duration_sector_1?: number | null;
  duration_sector_2?: number | null;
  duration_sector_3?: number | null;

  i1_speed?: number | null;
  i2_speed?: number | null;

  lap_duration?: number | null;

  lap_number: number;

  meeting_key: number;
  session_key: number;

  is_pit_out_lap?: boolean;
}