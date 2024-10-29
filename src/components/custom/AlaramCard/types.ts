import { ReactElement } from 'react';

type dataList = {
  label: string;
  value: string;
};
export interface IAlaramCard {
  isEmpty?: boolean;
  title?: string | ReactElement;
  dataList?: dataList[];
  onClick?: () => void;
  onClickMsg?: string;
  margin?: number | string;
}
