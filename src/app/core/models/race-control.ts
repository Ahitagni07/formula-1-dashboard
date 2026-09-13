export interface RaceControl {
  category: string;

  date: string;

  driver_number?: number | null;

  flag?: string | null;

  lap_number?: number | null;

  meeting_key: number;

  message: string;

  qualifying_phase?: number | null;

  scope: string;

  sector?: number | null;

  session_key: number;
}