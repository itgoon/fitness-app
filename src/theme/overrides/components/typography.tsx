import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export function typography(theme: Theme) {
  const { palette } = theme;
  // const rootStyles = (ownerState: TypographyProps) => {
  //   const light = palette.mode === 'light';

  //   const secondary = ownerState.color === 'info';
  //   const defaultStyle = {
  //     color: light ? palette.common.black : palette.common.white
  //   };
  //   const secondaryStyle = {
  //     ...(secondary && {
  //       color: light ? palette.grey[800] : palette.common.white
  //     })
  //   };
  //   return [defaultStyle, secondaryStyle];
  // };
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2)
        },
        gutterBottom: {
          marginBottom: theme.spacing(1)
        },
        root: {
          color:
            theme.palette.mode === 'light'
              ? theme.palette.common.black
              : theme.palette.common.white
        }
      }
    }
  };
}
