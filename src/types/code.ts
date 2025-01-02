export type ComboType = 'code' | 'membership';
export type ComboName =
  | 'MEMBER_STATUS'
  | 'APPLICATION_TYPE'
  | 'duty'
  | 'responsibility'
  | 'WITHDRAWAL_REASON'
  | 'STORE_CATEGORY';

export interface ResCombo {
  value: string | number;
  text: string;
  translate: string;
  customValues?: any;
}
