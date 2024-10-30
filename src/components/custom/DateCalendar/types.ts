// ----------------------------------------------------------------------

import { DateView } from '@mui/x-date-pickers';
import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { CSSProperties } from 'react';
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
}
