import { ReactNode } from 'react';

export interface ITabs {
  value: number;
  onChange: (e, newValue: number) => void;
  frLabel: string;
  secLabel: string;
}

export interface ITabPanel {
  value: number;
  index: number;
  children: ReactNode;
}
