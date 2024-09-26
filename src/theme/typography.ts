// ----------------------------------------------------------------------
import { CSSProperties } from 'react';

type tSize = {
  sm: number;
  md: number;
  lg: number;
};

export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }: tSize) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm)
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md)
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg)
    }
  };
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    fontSecondaryFamily: CSSProperties['fontFamily'];
    fontWeightSemiBold: CSSProperties['fontWeight'];
    textLabel: CSSProperties;
    subtitle0: CSSProperties;
  }
  interface TypographyVariantsOptions {
    subtitle0?: CSSProperties;
    textLabel?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    textLabel: true;
    subtitle0: true;

    'Body24/semiBold': true;
    'Body20/bold': true;
    'Body20/light': true;
    'Body18/bold': true;
    'Body16/bold': true;
    'Body16/regular': true;
    'Body16/light': true;
    'Body14/bold': true;
    'Body14/semiBold': true;
    'Body14/regular': true;
    'Body12/semiBold': true;
  }
}

export const primaryFont = 'Public Sans, sans-serif';
export const secondaryFont = 'Barlow, sans-serif';
const customVariant = () => {
  return {
    'Body24/semiBold': {
      fontWeight: 600,
      fontSize: pxToRem(24),
      lineHeight: '36px'
    },
    'Body20/bold': {
      fontWeight: 700,
      fontSize: pxToRem(20),
      lineHeight: '22px'
    },
    'Body20/light': {
      fontWeight: 400,
      fontSize: pxToRem(20),
      lineHeight: '22px'
    },
    'Body18/bold': {
      fontWeight: 700,
      fontSize: pxToRem(18),
      lineHeight: '22px'
    },
    'Body16/bold': {
      fontWeight: 700,
      fontSize: pxToRem(16),
      lineHeight: '22px'
    },
    'Body16/regular': {
      fontWeight: 500,
      fontSize: pxToRem(16),
      lineHeight: '22px'
    },
    'Body16/light': {
      fontWeight: 400,
      fontSize: pxToRem(16),
      lineHeight: '22px'
    },
    'Body14/bold': {
      fontWeight: 700,
      fontSize: pxToRem(14),
      lineHeight: '22px'
    },
    'Body14/semiBold': {
      fontWeight: 600,
      fontSize: pxToRem(14),
      lineHeight: '22px'
    },
    'Body14/regular': {
      fontWeight: 400,
      fontSize: pxToRem(14),
      lineHeight: '22px'
    },
    'Body12/semiBold': {
      fontWeight: 600,
      fontSize: pxToRem(12),
      lineHeight: '22px'
    }
  };
};

// ----------------------------------------------------------------------

export const typography = {
  fontFamily: primaryFont,
  fontSecondaryFamily: secondaryFont,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 })
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 })
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
  },
  h6: {
    fontWeight: 700,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
  },

  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16)
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14)
  },
  body1: {
    lineHeight: 1.5,
    fontSize: pxToRem(16)
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14)
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12)
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase'
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'unset'
  },
  textLabel: {
    fontWeight: 400,
    lineHeight: '18px',
    fontSize: pxToRem(12),
    textAlign: 'left'
  },
  ...customVariant()
} as const;
