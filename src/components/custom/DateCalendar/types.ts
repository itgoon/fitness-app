// ----------------------------------------------------------------------

import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { CSSProperties } from 'react';

import { DateView, PickersCalendarHeaderProps } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
export interface DatePickerProps
  extends Omit<MuiDatePickerProps<Date>, 'onChange' | 'value'> {
  format?: string;
  onChange?: (e: string) => void;
  type?: DateView;
  value?: string;
  sx?: CSSProperties;
}

export type workData = {
  type: string;
  date: string;
};
export interface IDatePicker {
  workData?: workData[];
  isCheckWorkout?: boolean;
  onChange?: (e: any) => void;
}

// calendar header 확장
export interface CalendarHeaderProps extends PickersCalendarHeaderProps<Dayjs> {
  isCheckWorkout?: boolean;
}
