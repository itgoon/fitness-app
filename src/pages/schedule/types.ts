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

export interface IStep {
  onNext?: () => void;
  selectedCard?: any;
}
