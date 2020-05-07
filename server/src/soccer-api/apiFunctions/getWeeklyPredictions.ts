require('dotenv').config();
import axios from 'axios';
import { randomizer } from '../functions/randomizer';
import { getWeeklyMatches } from '../apiFunctions/getWeeklyMatches';

export const getWeeklyPredictions = (): Array<object> => {
  const matchList = Array(getMatches());
};

async function getMatches() {
  return await getWeeklyMatches();
}
