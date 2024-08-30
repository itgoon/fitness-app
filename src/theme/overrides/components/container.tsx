import { Theme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export function container(theme: Theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          width: "100%",
          height: "100%",
          overflow: "auto"
          // backgroundColor: theme.palette.text.primary
        }
      }
    }
  };
}
