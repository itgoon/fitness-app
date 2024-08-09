// material-ui
import { TypographyVariantsOptions } from "@mui/material/styles";

// types

export type FontFamily =
  | `'Inter', sans-serif`
  | `'Poppins', sans-serif`
  | `'Roboto', sans-serif`
  | `'Public Sans', sans-serif`;

// ==============================|| DEFAULT THEME - TYPOGRAPHY ||============================== //
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    b1: true;
    b2: true;
    b3: true;
    b4: true;
    c1: true;
    c2: true;
    ht: true;
  }
}

const customVariant = () => {
  return {
    b1: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 700
    },
    b2: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500
    },
    b3: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400
    },
    b4: {
      fontSize: "13px",
      lineHeight: "18px",
      fontWeight: 400
    },
    c1: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 500
    },
    c2: {
      fontSize: "14px",
      lineHeight: "20px",
      fontWeight: 400
    },
    ht: {
      fontSize: "11px",
      lineHeight: "15px",
      fontWeight: 600
    }
  };
};
export default function Typography(): TypographyVariantsOptions {
  return {
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontSize: "32px",
      lineHeight: "42px",
      fontWeight: 700
    },
    h2: {
      fontSize: "28px",
      lineHeight: "40px",
      fontWeight: 700
    },
    h3: {
      fontSize: "24px",
      lineHeight: "30px",
      fontWeight: 700
    },
    h4: {
      fontSize: "20px",
      lineHeight: "28px",
      fontWeight: 700
    },
    h5: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 700
    },
    h6: {
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: 700
    },
    ...customVariant()
  };
}
