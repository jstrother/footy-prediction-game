import { Document } from 'mongoose';

export interface MatchData {
  readonly matchID: number;
  readonly homeTeam: {
    readonly teamID: number;
    readonly name: string;
    readonly logo: string;
  };
  readonly awayTeam: {
    readonly teamID: number;
    readonly name: string;
    readonly logo: string;
  };
  readonly league: {
    readonly leagueID: number;
    readonly name: string;
    readonly country: string;
    readonly logo: string;
    readonly flag: string;
  };
}
