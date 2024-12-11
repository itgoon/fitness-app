import { CSSProperties } from 'react';

type count = {
  date: string;
  count: number;
};
export interface IWeekCalendar {
  format?: string;
  greenBadge?: count[];
  orangeBadge?: count[];
  layoutSx?: CSSProperties;
}
