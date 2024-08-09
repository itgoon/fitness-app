import { colorThemes } from "@/themes/theme";
import { isAndroid, isIOS } from "react-device-detect";
import { ThemeMode } from "./constants/enums";
export const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * DeviceType 조회
 * @returns
 */
export const getDeviceType = (): String => {
  if (isAndroid) return "ANDROID";
  else if (isIOS) return "IOS";
  return "WEB";
};
/**
 * openapi-generator-3 에서 "/:id" 형식을 지원 X >해당 패턴의 방식이 존재할 경우 url을 바꾸는 함수
 * @param url
 * @returns
 */
export const buildUrl = (
  url: string,
  rParams: { [key: string]: string } = {}
): string => {
  try {
    const search = String(url.split("?")[1]);

    const params: { [key: string]: string } = rParams;
    const split = search.split("&");
    split.map((item) => {
      const data = item.split("=");
      if (data.length === 2) {
        params[data[0]] = data[1];
      }
    });
    const arr = url.split("/");
    arr.map((item) => {
      try {
        if (item.includes("%7B") && item.includes("%7D")) {
          let key: string = String(
            item.slice(item.indexOf("%7B") + 3, item.indexOf("%7D"))
          );
          url = url.replace(["%7B", key, "%7D"].join(""), String(params[key]));
        }
      } catch (err) {}
    });
  } catch (err) {
    console.log("err : ", err);
  }

  return url;
};

export const checkJsonData = (data: { [key: string]: any }): boolean => {
  if (!data) return false;

  let ret = true;
  Object.values(data)?.map((item) => {
    if (!item) ret = false;
  });

  return ret;
};

export const getColor = (color: string, mode: ThemeMode) => {
  const themeList = colorThemes(mode);

  if (!themeList) return;
  const _theme = themeList?.find((item) => item?.main?.name === color);

  return _theme ? _theme : themeList[0];
};
