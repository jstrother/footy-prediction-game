import { Schema } from 'mongoose';

export const LeagueDataSchema = new Schema({
  leagueID: Number,
  seasonStart: String,
  seasonEnd: String,
});
