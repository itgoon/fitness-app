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
export interface ICommon {
  selectedIndex: number[][];
  setSelectedIndex: (indices: number[][] | any) => void; // 2차원 배열을 인자로 받도록 수정
  onDelete: () => void;
}

export interface IRecordList extends ICommon {
  // tab diet array
  arrList: TdietRecordList[];
  isEdit: boolean;
  onChange: (fr: number, sec: number) => void;
  onClickImage: (fr: number, sec: number) => void;
}
export interface IimageViewer extends ICommon {
  clickedImg?: TdietRecordList;
  onClose: () => void;
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
