import { Dayjs } from 'dayjs';
import { CSSProperties } from 'react';

export interface IReservationCard {
  chipLabel: 'error' | 'primary' | 'warning';
  date: string | Dayjs;
  layoutSx?: CSSProperties;
}
export interface ICardBody {
  time?: string | any;
  chipLabel: 'error' | 'primary' | 'warning';
}
