type list = {
  date: string;
  type: string;
  content: string;
  imageName: string[];
  imageUrls: string[];
};
export interface IRecordList {
  arrList: list[];
  isEdit: boolean;
  onChange: (fr: number, sec: number) => void;
  selectedIndex: number[][];
}
