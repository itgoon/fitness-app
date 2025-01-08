import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider as MuiLocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { ReactNode } from 'react';
import { useLocales } from './useLocales';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

export default function LocalizationProvider({ children }: Props) {
  const { currentLang } = useLocales();
  return (
    <MuiLocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={currentLang.adapterLocale}
    >
      {children}
    </MuiLocalizationProvider>
  );
}
