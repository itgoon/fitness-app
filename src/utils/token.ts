import { removeItem, setItem } from './localStorage';

// 토큰을 로컬 스토리지에 저장
export const saveTokenToStorage = (key: string, token?: string | null) => {
  if (token) {
    setItem(key, token);
  } else {
    removeItem(key);
  }
};
