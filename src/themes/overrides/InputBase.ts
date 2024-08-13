// ==============================|| OVERRIDES - INPUT BASE ||============================== //

import { Theme } from "@mui/material/styles";

export default function InputBase(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: 40,
          borderWidth: 1,
          borderStyle: "solid",
          paddingLeft: 7,
          paddingRight: 7,
          fontSize: "1rem",
          borderColor: theme.palette.grey[300],
          borderRadius: theme.spacing(0.5),
          //TODO:  pladceholeder: "",

          [`input`]: {
            padding: 0,
            height: "inherit"
          },
          [`fieldset`]: {
            borderWidth: "0 !important"
          }
        },

        sizeSmall: {
          height: 24,
          fontSize: "0.85rem"
        }
      }
    }
  };
}
