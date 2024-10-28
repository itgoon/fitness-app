import { ReactNode } from 'react';

export interface ITabPanel {
  value: number;
  index: number;
  children: ReactNode;
}
