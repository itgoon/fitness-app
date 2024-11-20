export interface RecordData {
  date: string;
  type: string;
  content: string;
  imageName: string[];
  imageUrls: string[];
  imageqty: number;
}

export type TdietRecordList = {
  date: string;
  type: string;
  content: string;
  imageName: string[];
  imageUrls: string[];
};

export interface IRecordList {
  //  tab diet array
  arrList: TdietRecordList[];
  isEdit: boolean;
  onChange: (fr: number, sec: number) => void;
  selectedIndex: number[][];
}

// image viewer
export interface IimageViewer {
  imgIndex: number;
  clickedImg?: TdietRecordList;
  onClose: () => void;
}
