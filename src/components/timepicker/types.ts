import { ReactNode } from "react";

export interface TimepickerProps {
  value?: string; // YYYY-MM-DD
  format?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  children?: ReactNode;
  title?: string;
  width?: string;
  disabled?: boolean;
  isRef?: any;
}
