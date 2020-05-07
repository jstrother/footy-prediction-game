require('dotenv').config();
import axios from 'axios';
// import { isThisWeek } from 'date-fns';
// import { getWeekends } from '../functions/getWeekends';
// import { getSeasonDates } from '../functions/getSeasonDates';
import { randomizer } from '../functions/randomizer';
import { getWeeklyLeagues } from '../apiFunctions/getWeeklyLeagues';
import { LeagueData } from '../interfaces/leagueData.interface';
import { MatchData } from '../interfaces/matchData.interface';
import { baseURL } from 'src/base-constants';

export const getWeeklyMatches = (): Array<object> => {
  const leaguesList = Array(getLeagues());
  // const weekendDates = getWeekends(getSeasonDates(leaguesList));
  const selectedMatches = [];

  let response;

  leaguesList.forEach(async (league: LeagueData) => {
    try {
      response = await axios({
        method: 'GET',
        url: `${baseURL}fixtures/league/${league.leagueID}`,
        headers: {
          'content-type': 'application/octet-stream',
          'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
          'x-rapidapi-key': process.env.FOOTY_API_KEY,
        },
      });
    } catch (error) {
      throw new Error(error);
    }

    const matches = response.data.api.fixtures
      .filter(match => {
        // const matchDate = new Date(match.event_date);
        // if (
        //   weekendDates.includes(matchDate.toUTCString()) &&
        //   isThisWeek(matchDate, {
        //     weekStartsOn: 1,
        //   })
        // ) {
        //   // this makes sure that the match takes place on a weekend and only returns it if it is this coming weekend, with the week set to start on Monday
        //   return match;
        // }
        return match;
      })
      .map(data => {
        const match: MatchData = {
          matchID: data.fixture_id,
          homeTeam: {
            teamID: data.homeTeam.team_id,
            name: data.homeTeam.team_name,
            logo: data.homeTeam.logo,
          },
          awayTeam: {
            teamID: data.awayTeam.team_id,
            name: data.awayTeam.team_name,
            logo: data.awayTeam.logo,
          },
          league: {
            leagueID: data.league_id,
            name: data.league.name,
            country: data.league.country,
            logo: data.league.logo,
            flag: data.league.flag,
          },
        };

        return match;
      });

    selectedMatches.push(matches[randomizer(matches.length)]);
  });

  return selectedMatches;
};

async function getLeagues() {
  return await getWeeklyLeagues();
}
