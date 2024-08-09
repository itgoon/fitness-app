import { ReactNode, useMemo } from "react";

// material-ui
import CssBaseline from "@mui/material/CssBaseline";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import {
  Theme,
  ThemeOptions,
  ThemeProvider,
  TypographyVariantsOptions,
  createTheme
} from "@mui/material/styles";
// project import
// import useConfig from 'hooks/useConfig';
import Store from "@/store";
import { ThemeMode } from "@/utils/constants/enums";
import { useRecoilState } from "recoil";
<<<<<<< HEAD
import { commonDarkColor, commonLightColor } from "./theme";
// import CustomShadows from './shadows';
import { getColor } from "@/utils/commonUtil";
import Typography from "./overrides/typography";
=======
import { colorThemes, commonDarkColor, commonLightColor } from "./theme";
import Typography from "./typography";
import ComponentsOverrides from "./overrides";
// import CustomShadows from './shadows';
>>>>>>> 2c73a94ce7dbc8ef996b13dac5302dcfb49a432f

// types
export type ColorList =
  | "default"
  | "theme1"
  | "theme2"
  | "theme3"
  | "theme4"
  | "theme5"
  | "theme6"
  | "theme7"
  | "theme8";

// types
type ThemeCustomizationProps = {
  children: ReactNode;
};

// ==============================|| DEFAULT THEME - MAIN ||============================== //

export default function ThemeCustomization({
  children
}: ThemeCustomizationProps) {
  const [mode] = useRecoilState(Store.Layout.modeState);
  const [color] = useRecoilState(Store.Layout.colorState);

  const themeTypography: TypographyVariantsOptions =
    useMemo<TypographyVariantsOptions>(() => Typography(), []);

  const commonTheme: ThemeOptions["palette"] = useMemo(
    () => (mode === ThemeMode.LIGHT ? commonLightColor : commonDarkColor),
    [mode]
  );
  const colorTheme = useMemo(
    () => getColor(color, mode),

    [color, mode]
  );

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: {
        mode: mode,
        ...commonTheme,
        ...colorTheme
      },

      typography: themeTypography
    }),
    [mode, color, themeTypography]
  );

  console.log({ themeOptions }, { mode });
  const themes: Theme = createTheme(themeOptions);
  themes.components = ComponentsOverrides(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
