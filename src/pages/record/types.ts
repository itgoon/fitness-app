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

// 기록 페이지 리스트
export interface IRecordList {
  //  tab diet array
  arrList: TdietRecordList[];
  isEdit: boolean;
  onChange: (fr: number, sec: number) => void;
  onDelete: () => void;
  selectedIndex: number[][];
}
// image viewer
export interface IimageViewer {
  imgIndex: number;
  setImgIndex: (arg: any) => void;
  clickedImg?: TdietRecordList;
  onClose: () => void;
  onDelete: () => void;
  onNext: () => void;
}

// 레이아웃
export interface IRecordHeader {
  isEdit: boolean;
  handleEdit: () => void;
}
export interface IRecordBottom {
  selectImageCount: number;
  onSelectAll: () => void;
  onDelete: () => void;
}
//
