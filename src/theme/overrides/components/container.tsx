import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          width: '100%',
          height: '100%',
          overflow: 'auto',
          padding: 0
          // backgroundColor: theme.palette.text.primary
        }
      }
    }
  };
}
