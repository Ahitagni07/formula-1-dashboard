export interface SessionResult {
  dnf: boolean;

  dns: boolean;

  dsq: boolean;

  driver_number: number;

  duration: number | number[];

  gap_to_leader: number | string | (number | string)[];

  meeting_key: number;

  number_of_laps: number;

  position: number;

  session_key: number;
}