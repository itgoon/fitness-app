import { ReactNode } from 'react';

export interface ITabPanel {
  value: number;
  index: number;
  children: ReactNode;
}

export type cardData = {
  date: string;
  time: string;
  place?: string;
  count?: string;
  trainer?: string;
  weight?: string;
  chipState?: 'error' | 'primary' | 'warning';
};

// wordkoutRecord
export interface IWorkOutRecord {
  cardDataList?: cardData[];
}
// ReservationCard
export interface IReservationList {
  cardDataList?: cardData[];
}
