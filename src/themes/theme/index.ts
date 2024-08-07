import { ThemeMode } from "@/utils/constants/enums";
import { ThemeOptions } from "@mui/material/styles";
import { default as theme1Color } from "./theme1";
import theme2Color from "./theme2";

declare module "@mui/material/styles" {
  interface Palette {
    main?: {
      name: string;
      color: string;
    };
    // bg?: Palette["primary"];
  }
  interface PaletteOptions {
    main?: {
      name: string;
      color: string;
    };
    // bg?: PaletteOptions["primary"];
  }
}

export const contrastText = "#fff";
const greyList = [
  "#fafafa",
  "#f5f5f5",
  "#f0f0f0",
  "#d9d9d9",
  "#bfbfbf",
  "#8c8c8c",
  "#595959",
  "#262626",
  "#141414"
];

const commonLightColor: ThemeOptions["palette"] = {
  grey: {
    50: greyList[0],
    100: greyList[1],
    200: greyList[2],
    300: greyList[3],
    400: greyList[4],
    500: greyList[5],
    600: greyList[6],
    700: greyList[7],
    800: greyList[8],
    900: greyList[9]
  },
  common: {
    white: "#fff",
    black: "#000"
  }
  // text: {
  //   primary: greyList[9],
  //   secondary: greyList[8],
  //   disabled: greyList[5]
  // }
  // bg: {
  //   main: greyList[0],
  //   contrastText
  // }
};

const commonDarkColor: ThemeOptions["palette"] = {
  ...commonLightColor,
  grey: {
    50: greyList[9],
    100: greyList[8],
    200: greyList[7],
    300: greyList[6],
    400: greyList[5],
    500: greyList[4],
    600: greyList[3],
    700: greyList[2],
    800: greyList[1],
    900: greyList[0]
  }
  // text: {
  //   primary: greyList[0],
  //   secondary: greyList[2],
  //   disabled: greyList[5]
  // }
  // bg: {
  //   main: greyList[9]
  // }
};

const colorThemes = (mode: ThemeMode): ThemeOptions["palette"][] => [
  theme1Color(mode),
  theme2Color(mode)
];
console.log({ colorThemes });

export { colorThemes, commonDarkColor, commonLightColor };
