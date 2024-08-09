// material-ui
import { alpha, Theme } from "@mui/material/styles";

// project import

// types

// ==============================|| BUTTON - COLORS ||============================== //

// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme: Theme) {
  const disabledStyle = {
    "&.Mui-disabled": {
      backgroundColor: theme.palette.grey[200]
    }
  };
  const iconStyle = {
    "&>*:nth-of-type(1)": {
      fontSize: "inherit"
    }
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          // TODO: 정해지면 정의하기 fontFamily: "",
          fontWeight: 400,
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
        contained: {
          ...disabledStyle
        },
        outlined: {
          ...disabledStyle
        },
        text: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none"
          }
        },
        endIcon: {
          ...iconStyle
        },
        startIcon: {
          ...iconStyle
        },
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
          height: theme.spacing(5),
          fontSize: "0.825rem",
          padding: "2px 16px"
        },
        sizeMedium: {
          minWidth: 92,
          fontSize: "1.05rem",
          height: theme.spacing(5.5)
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
