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
  onClose?: () => void;
}

export interface IQrModal {
  customerData?: customerData;
  centerData?: data[];
  open: boolean;
  onClose: () => void;
}

export interface IExpansionQR {
  centerData?: data[];
  onBack: () => void;
}
