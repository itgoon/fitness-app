import { ThemeMode } from "@/utils/constants/enums";
import { ThemeOptions } from "@mui/material/styles";
import { contrastText } from ".";

// ==============================|| PRESET THEME - THEME2 ||============================== //

const theme2Color = (mode: ThemeMode): ThemeOptions["palette"] => {
  let primaryColors = [
    "#d1e8d99c",
    "#8cdba9",
    "#63cf8e",
    "#3ec277",
    "#1db564",
    "#00a854",
    "#008245",
    "#005c34",
    "#003620",
    "#000f0a"
  ];

  let errorColors = ["#FDE8E7", "#F25E52", "#F04134", "#EE3B2F", "#E92A21"];
  let warningColors = ["#FFF7E0", "#FFC926", "#FFBF00", "#FFB900", "#FFA900"];
  let infoColors = ["#E0F4F5", "#26B0BA", "#00A2AE", "#009AA7", "#008694"];
  let successColors = ["#E0F5EA", "#26B56E", "#00A854", "#00A04D", "#008D3A"];

  let secondaryColors = ["#FFB6C1"];

  if (mode === ThemeMode.DARK) {
    primaryColors = [
      "#1a2721",
      "#173728",
      "#15472e",
      "#115c36",
      "#0b7841",
      "#05934c",
      "#1da65d",
      "#3cba73",
      "#61ca8b",
      "#8ad7a6"
    ];
    secondaryColors = ["#DB7093"];
    errorColors = ["#321d1d", "#7d2e28", "#d13c31", "#e66859", "#f8baaf"];
    warningColors = ["#342c1a", "#836611", "#dda705", "#e9bf28", "#f8e577"];
    infoColors = ["#1a2628", "#11595f", "#058e98", "#1ea6aa", "#64cfcb"];
    successColors = ["#1a2721", "#115c36", "#05934c", "#1da65d", "#61ca8b"];
  }

  return {
    main: { name: "theme2", color: primaryColors[5] },
    primary: {
      100: primaryColors[1],
      200: primaryColors[2],
      light: primaryColors[3],
      400: primaryColors[4],
      main: primaryColors[5],
      dark: primaryColors[6],
      700: primaryColors[7],
      900: primaryColors[9],
      contrastText
    },
    secondary: {
      main: secondaryColors[0],
      contrastText
    },
    error: {
      light: errorColors[1],
      main: errorColors[2],
      dark: errorColors[3],
      contrastText
    },
    warning: {
      light: warningColors[1],
      main: warningColors[2],
      dark: warningColors[3],
      contrastText
    },
    info: {
      light: infoColors[1],
      main: infoColors[2],
      dark: infoColors[3],
      contrastText
    },
    success: {
      light: successColors[1],
      main: successColors[2],
      dark: successColors[3],
      contrastText
    }
  };
};

export default theme2Color;
