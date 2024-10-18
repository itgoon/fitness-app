import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function divider(theme: Theme) {
  const lightMode = theme.palette.mode === 'light';

  return {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#ECEFF1'
        }
      }
    }
  };
}
