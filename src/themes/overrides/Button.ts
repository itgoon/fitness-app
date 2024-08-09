// material-ui
import { alpha, Theme } from "@mui/material/styles";

// project import

// types

// ==============================|| BUTTON - COLORS ||============================== //

// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          // TODO: 정해지면 정의하기 fontFamily: "",
          fontWeight: 900,
          "&::after": {
            content: '""',
            display: "block",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: 4,
            opacity: 0,
            transition: "all 0.5s"
          },

          "&:active::after": {
            position: "absolute",
            borderRadius: 4,
            left: 0,
            top: 0,
            opacity: 1,
            transition: "0s"
          }
        },
        contained: {},
        outlined: {},
        text: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none"
          }
        },
        endIcon: {},
        startIcon: {},
        dashed: {
          border: "1px dashed",

          "&.Mui-disabled": {
            color: `${theme.palette.grey[300]} !important`,
            borderColor: `${theme.palette.grey[400]} !important`,
            backgroundColor: `${theme.palette.grey[200]} !important`
          }
        },
        shadow: {
          "&.Mui-disabled": {
            color: `${theme.palette.grey[300]} !important`,
            borderColor: `${theme.palette.grey[400]} !important`,
            backgroundColor: `${theme.palette.grey[200]} !important`
          }
        },

        sizeSmall: {
          minWidth: 45,
          height: theme.spacing(3.5),
          fontSize: "0.825rem",
          padding: "2px 16px"
        },
        sizeMedium: {
          minWidth: 922,
          fontSize: "0.8rem",
          height: theme.spacing(4.5)
        },
        sizeLarge: {
          minWidth: 349,
          px: 3,
          fontSize: "0.9rem",
          height: theme.spacing(5)
        }
      }
    }
  };
}
