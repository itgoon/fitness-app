import { CSSProperties } from 'react';

export interface IReservationCard {
  layoutSx?: CSSProperties;
  cardSx?: CSSProperties;
  cardData: cardData;
}

type cardData = {
  date: string;
  time: string;
  place?: string;
  count?: string;
  trainer?: string;
  weight?: string;
  chipState?: 'error' | 'primary' | 'warning';
};
export interface ICardBody {
  time?: string | any;
  cardData: cardData;
  cardSx?: CSSProperties;
}
