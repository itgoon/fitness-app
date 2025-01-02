import { ReactNode } from 'react';

export interface Iheader {
  stepTitle?: string;
  isStart?: boolean;
  isEnd?: boolean;
  title?: ReactNode | string;
  isAdd?: boolean;
  isMore?: boolean;
}
