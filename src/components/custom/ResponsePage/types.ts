type list = {
  label: string;
  value: string;
};
export interface IResponsePage {
  iconName?: any;
  iconSize?: number;
  dataList: list[];
  onHome: () => void;
  onClick: () => void;
  closeMsg: string;
  clickMsg: string;
}
