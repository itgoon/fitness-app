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
export interface ICalenderModal {
  open: boolean;
  onClose: () => void;
  onChange: (e: any) => void;
}
// calendar
export interface IDatePicker {
  workData?: workData[];
  isBadge?: boolean;
  isModal?: boolean;
  value?: string;
  onChange?: (e: any) => void;
}

// calendar header 확장
export interface CalendarHeaderProps extends PickersCalendarHeaderProps<Dayjs> {
  isBadge?: boolean;
  isModal?: boolean;
}
