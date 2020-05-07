require('dotenv').config();
import axios from 'axios';
import { LeagueData } from '../interfaces/leagueData.interface';
import { SelectedCombo } from '../interfaces/selectedCombo.interface';
import { selectLeagues } from '../functions/selectLeagues';
import { determineSeason } from '../functions/determineSeason';
import { baseURL } from '../../base-constants';

export const getWeeklyLeagues = (): Array<object> => {
  const season = determineSeason();
  const selectedLeagues = selectLeagues();
  const weeklyLeagues = [];

  let response;

  selectedLeagues.forEach(async (combo: SelectedCombo) => {
    try {
      response = await axios({
        method: 'GET',
        url: `${baseURL}leagues/country/${combo.country}/${season}`,
        headers: {
          'content-type': 'application/octet-stream',
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key': process.env.FOOTY_API_KEY,
        },
      });
    } catch (error) {
      throw new Error(error);
    }

    const leagueData: LeagueData = response.data.api.leagues
      .filter(league => league.name === combo.league)
      .map(data => {
        return {
          leagueID: data.league_id,
          seasonStart: new Date(data.season_start).toUTCString(),
          seasonEnd: new Date(data.season_end).toUTCString(),
        };
      })
      .pop(); // we use pop() because filter() and map() return arrays and we don't want an array of just one object, just that object

    weeklyLeagues.push(leagueData);
  });

  return weeklyLeagues;
};
