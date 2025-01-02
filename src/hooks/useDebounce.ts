import { useState, useEffect } from 'react';

type UseDebounce = (value: string, delay: number) => string;

export const useDebounce: UseDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};
