import { AxiosResponse } from "axios";
import { ResultCode } from "./utils/constants/enums";

declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

export interface Response<T = any> {
  data: T;
  meta: {
    errCode: ResultCode;
    errMsg: string;
    errTranslate?: string;
    data?: any;
  };
}

declare global {
  interface Window {
    setDeviceToken: unknown;
    setCurrentPosition: unknown;
  }
}

export type ApiResponse<T> = Promise<AxiosResponse<T>>;
