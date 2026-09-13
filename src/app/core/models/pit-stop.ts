export interface PitStop {
  date: string;

  driver_number: number;

  lane_duration: number;

  lap_number: number;

  meeting_key: number;

  session_key: number;

  stop_duration?: number;
}