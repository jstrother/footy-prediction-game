import { countriesLeagues } from '../data/countriesLeagues';
import { randomizer } from './randomizer';

export const selectLeagues = (): Array<object> => {
  const leagues = [];

  do {
    leagues.push(countriesLeagues[randomizer(countriesLeagues.length)]);
  } while (leagues.length < 7);

  return leagues;
};
