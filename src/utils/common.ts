/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */

export function buildUrl(url: string, parameters: any) {
  let qs = '';
  for (const key in parameters) {
    if (parameters.hasOwnProperty(key)) {
      const value = parameters[key];
      qs += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
    }
  }
  if (qs.length > 0) {
    qs = qs.substring(0, qs.length - 1); // chop off last "&"
    url = `${url}?${qs}`;
  }

  return url;
}

export const isEmpty = (data): boolean => {
  if (typeof data === 'object') {
    if (Object.keys(data).length === 0) return true;
  }
  if (!data || data === undefined || data === '' || data === null) return true;
  return false;
};

export const calculateKoreanAge = (birth: string) => {
  const today = new Date();
  const birthDate = new Date(
    Number(birth.substring(0, 4)),
    Number(birth.substring(4, 6)),
    Number(birth.substring(6, 8))
  ); // 2000년 8월 10일

  const age = today.getFullYear() - birthDate.getFullYear() + 1;

  return age;
};
