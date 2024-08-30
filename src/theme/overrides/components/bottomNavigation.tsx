import { Theme } from "@mui/material/styles";
import { HEADER } from "src/layouts/configLayout";
import { SPACING } from "src/layouts/dashboard/main";

// ----------------------------------------------------------------------

export function bottomNavigation(theme: Theme) {
  return {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          width: "100%",
          height: HEADER.H_MOBILE + SPACING,
          position: "absolute",
          bottom: 0,
          // background: theme.palette.grey[900],
          left: 0,
          boxShadow: theme.customShadows.layout
          // backgroundColor: theme.palette.text.primary
        }
      }
    }
  };
}
