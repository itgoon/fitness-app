export interface TimeSlot {
  time: string;
  disabled: boolean;
}
export interface IReservationList {
  date: string;
  time: string;
}

export interface IStep {
  reservationList?: IReservationList;
  onNext?: () => void;
  setReservationList?: (arg: any) => void;
  reservationData?: { label: string; value: string }[];
}
