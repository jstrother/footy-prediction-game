import { isWeekend } from 'date-fns';
import { DateRange } from '../interfaces/dateRange.interface'

export const getWeekends = (dateRange: DateRange): Array<string> => {
  const end = new Date(dateRange.earliestEnd);
  const weekends = [];

  let start = new Date(dateRange.latestStart);

  while(start <= end) {
    if (isWeekend(start)) {
      weekends.push(start.toUTCString());
    }
    start = new Date(start.setUTCDate(start.getUTCDate() + 1));
  }

  return weekends;
}