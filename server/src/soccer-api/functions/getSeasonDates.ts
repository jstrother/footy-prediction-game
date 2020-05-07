import { LeagueData } from '../interfaces/leagueData.interface';

export const getSeasonDates = (leagueList: Array<object>): object => {
  const seasonDates = {
    earliestEnd: '',
    latestStart: '',
  };

  leagueList.forEach((league: LeagueData) => {
    seasonDates.latestStart = latestStartCompare(league.seasonStart, seasonDates.latestStart);

    seasonDates.earliestEnd = earliestEndCompare(league.seasonEnd, seasonDates.earliestEnd);
  });

  return seasonDates;
};

function latestStartCompare(leagueDate: string, seasonDate = ''): string {
  return seasonDate === '' ? leagueDate : largest(leagueDate, seasonDate);

  function largest(a, b) {
    return a > b ? a : a < b ? b : a;
  }
}

function earliestEndCompare(leagueDate: string, seasonDate = ''): string {
  return seasonDate === '' ? leagueDate : smallest(leagueDate, seasonDate);

  function smallest(a, b) {
    return a < b ? a : a > b ? b : a;
  }
}
