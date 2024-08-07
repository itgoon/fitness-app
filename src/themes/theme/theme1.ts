//material-ui
import { ThemeMode } from "@/utils/constants/enums";
import { ThemeOptions } from "@mui/material/styles";
import { contrastText } from ".";

// ==============================|| PRESET THEME - THEME1 - DEFAULT ||============================== //

const theme1Color = (mode: ThemeMode): ThemeOptions["palette"] => {
  let primaryColors = [
    "#D6E4FF",
    "#D6E4FF",
    "#ADC8FF",
    "#84A9FF",
    "#6690FF",
    "#3366FF",
    "#254EDB",
    "#1939B7",
    "#102693",
    "#102693"
  ];
  let secondaryColors = ["#FF1493"];
  let errorColors = ["#FFE7D3", "#FF805D", "#FF4528", "#DB271D", "#930C1A"];
  let warningColors = ["#FFF6D0", "#FFCF4E", "#FFB814", "#DB970E", "#935B06"];
  let infoColors = ["#DCF0FF", "#7EB9FF", "#549BFF", "#3D78DB", "#1A3D93"];
  let successColors = ["#EAFCD4", "#8AE65B", "#58D62A", "#3DB81E", "#137C0D"];

  if (mode === ThemeMode.DARK) {
    primaryColors = [
      "#1c2134",
      "#1f294d",
      "#243462",
      "#273e83",
      "#2c4db0",
      "#305bdd",
      "#567fe9",
      "#80a4f4",
      "#a9c5f8",
      "#d2e2fb"
    ];
    errorColors = ["#341d1b", "#b03725", "#dd3f27", "#e9664d", "#fbd6c9"];
    secondaryColors = ["#C71585"];
    warningColors = ["#342a1a", "#83631a", "#dda116", "#e9ba3a", "#fbefb5"];
    infoColors = ["#202734", "#416fb0", "#4c88dd", "#74a8e9", "#ecf4fb"];
    successColors = ["#1f2e1c", "#449626", "#4fba28", "#74cf4d", "#e3fbd2"];
  }

  return {
    main: { name: "theme1", color: primaryColors[5] },
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

export default theme1Color;
