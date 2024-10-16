export const getItem = (key: string) => {
  if (typeof window === 'undefined') return undefined;
  return localStorage.getItem(key);
};

export const setItem = (key: string, value: any) => {
  if (typeof window === 'undefined') return undefined;
  return localStorage.setItem(key, value);
};

export const removeItem = (key: string) => {
  if (typeof window === 'undefined') return undefined;
  return localStorage.removeItem(key);
};

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key);
      if (!(savedValue === null || savedValue === 'undefined')) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue: any) => {
        localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };
