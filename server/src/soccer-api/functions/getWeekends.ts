import { isWeekend } from 'date-fns';

export const getWeekends = (dateRange): Array<string> => {
  const end = new Date(dateRange.earliestEnd);
  const weekends = [];

  let start = new Date(dateRange.latestStart);

  while (start <= end) {
    if (isWeekend(start)) {
      weekends.push(start.toUTCString());
    }
    start = new Date(start.setUTCDate(start.getUTCDate() + 1));
  }

  return weekends;
};
