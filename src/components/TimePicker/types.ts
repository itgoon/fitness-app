import { ReactNode } from 'react';

export interface ITimePicker {
  value?: string; // YYYY-MM-DD
  format?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  children?: ReactNode;
  title?: string;
  subTitle?: string;
  width?: string;
  disabled?: boolean;
  isRef?: any;
  style?: any;
  label?: string;
}
