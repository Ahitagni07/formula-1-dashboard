export interface Driver {
  meeting_key: number;
  session_key: number;

  driver_number: number;

  broadcast_name: string | null;

  first_name: string | null;
  last_name: string | null;
  full_name: string | null;

  name_acronym: string | null;

  team_name: string | null;
  team_colour: string | null;

  headshot_url: string | null;

  country_code?: string | null;
}