// QrCardData
type data = {
  label: string;
  value: string;
};
export type customerData = {
  centerName: data;
  lesson: data;
  count: data;
  trainer: data;
  contractDate: data;
  effectiveDate: data;
};
export interface IQrCardData {
  customerData?: customerData;
  onClick?: () => void;
}

export interface IQrModal {
  customerData?: customerData;
  open: boolean;
  onClose: () => void;
}
