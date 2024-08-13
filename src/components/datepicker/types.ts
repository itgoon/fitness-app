import dayjs, { Dayjs } from "dayjs";
import { ReactNode } from "react";

export interface DatePickerProps {
  value?: string | Dayjs; // YYYY-MM-DD
  format?: string;
  onChange?: (value: string) => void;
  children?: ReactNode;
  placeholder?: string;
  maxDate?: Dayjs;
  isRef?: any;
  title?: string;
  subTitle?: string;
}
