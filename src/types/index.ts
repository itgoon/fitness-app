export interface Meta {
  data: any;
  errCode: number;
  errMsg: string;
  errTranslate: string;
}

export interface Response<T = any> {
  data: T;
  meta: Meta;
}

export interface ResponsePageList<T = any> {
  data: {
    content: T;
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
  meta: Meta;
}
