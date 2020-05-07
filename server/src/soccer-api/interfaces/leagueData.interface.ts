import { Document } from 'mongoose';

export interface LeagueData extends Document {
  readonly leagueID: number;
  readonly seasonStart: string;
  readonly seasonEnd: string;
}
