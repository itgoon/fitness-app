type list = {
  label: string;
  value: string;
};
export interface IResponsePage {
  title: string;
  iconName?: any;
  iconSize?: number;
  dataList: list[];
  onHome: () => void;
  onClick: () => void;
  closeMsg: string;
  clickMsg: string;
}
