import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export function typography(theme: Theme) {
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
            theme.palette.mode === "light"
              ? theme.palette.common.black
              : theme.palette.common.white
        }
      }
    }
  };
}
