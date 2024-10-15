// ==============================|| OVERRIDES - BUTTON ||============================== //

import { Theme } from '@mui/material';

export default function timePicker(theme: Theme) {
  return {
    MuiMultiSectionDigitalClock: {
      styleOverrides: {
        root: {
          border: 'none !important',
          ul: {
            width: '100%',
            border: 'none !important',
            li: {
              width: '100%',
              margin: 0,
              padding: 0,
              fontSize: 20
            }
          }
        }
      }
    }
  };
}
