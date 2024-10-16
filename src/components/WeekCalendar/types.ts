import { Dayjs } from 'dayjs';
import { CSSProperties } from 'react';

type count = {
  date: string;
  count: number;
};
export interface IWeekCalendar {
  date?: string | Dayjs;
  format?: string;
  onClick?: (e: string) => void;
  eventList?: { date: string; count: number }[];
  // onChange?: (e: string) => void; //viewDate(보이는 주의 일요일)이 변경 될때
  monthCount?: count[];
  onChangeMonth?: (e: any) => void;
  layoutSx?: CSSProperties;
}
