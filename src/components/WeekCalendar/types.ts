import { Dayjs } from 'dayjs';
import { CSSProperties } from 'react';

type count = {
  date: string;
  count: number;
};
export interface IWeekCalendar {
  date?: string | Dayjs;
  format?: string;
  monthCount?: count[];
  layoutSx?: CSSProperties;
}
