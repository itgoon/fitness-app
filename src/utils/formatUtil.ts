import dayjs from "dayjs";

export const TimeFormat = "HH:mm";

export const DateFormat = "YYYY.MM.DD";
export const DateReqFormat = "YYYY-MM-DD";

export const DateResFormat = "yyyy-MM-dd HH:mm:ss";

// 시간 형식
export const castToTime = (value: string): string => {
  //value : HHmm
  if (value === undefined) return "";

  return value.replace(/(.{2})/g, "$1:").substring(0, 5);
};

// 연락처 형식
export const castToMobile = (num: string): string => {
  //value : HHmm
  if (num === undefined) return "";

  let formatNum = "";

  if (num.length == 11) {
    formatNum = num.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  } else if (num.length == 8) {
    formatNum = num.replace(/(\d{4})(\d{4})/, "$1-$2");
  } else {
    if (num.indexOf("02") == 0) {
      if (num.length === 9)
        formatNum = num.replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
      else formatNum = num.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
    } else {
      formatNum = num.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }
  }

  return formatNum;
};

// 금액 형식
export const castToPrice = (value: string | number): string => {
  const val = String(value).replace(/,/g, "");

  //value : HHmm
  if (val === undefined) return "0";
  const price = Number(val);
  if (isNaN(price)) {
    return "0";
  }
  return price.toLocaleString("ko-KR");
};
// 시간차 구하기 (분/시간/일)
export const getTimeInterval = (_start: string, _end?: string): string => {
  const start = dayjs(_start);
  const end = _end ? dayjs(_end) : dayjs();
  if (start.format(DateReqFormat) !== end.format(DateReqFormat)) {
    const _day = Math.floor(dayjs.duration(end.diff(start)).asDays());

    if (_day > 0) {
      return _day + "일";
    }
  }

  const dura = Math.floor(dayjs.duration(end.diff(start)).asMinutes());

  if (dura >= 60) return Math.floor(dura / 60) + "시간";

  return Math.floor(dura) + "분";
};
// 이메일 마스킹
export const castToMaskingEmail = (value: string) => {
  const emailList = value.split("@");
  let _mail = emailList[0];
  let _address = emailList[1] ? "@" + emailList[1] : "";

  const emLength = emailList[0].length;

  if (emLength <= 3 && emLength > 1) {
    let mask = "";
    [...Array(emLength - 1)].map((_) => (mask += "*"));
    _mail = emailList[0].substring(0, 1) + mask;
  } else if (emLength > 3) {
    let mask = "";
    [...Array(emLength - 3)].map((_) => (mask += "*"));
    _mail = emailList[0].substring(0, 3) + mask;
  }

  return _mail + _address;
};
