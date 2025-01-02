import { forwardRef } from 'react';

import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
  isFooter?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, isFooter = false, sx, ...other }, ref) => {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';
    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
    // const logo = (
    //   <Box
    //     component="img"
    //     src="/logo/logo_single.svg" => your path
    //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
    //   />
    // );

    const logo = (
      <Box
        component="img"
        src={`/logo/${isFooter ? 'logo_footer' : isLightMode ? 'logo_only_image' : 'logo_dark'}.png`}
        draggable="false"
        sx={{
          width: 120,
          height: 36,
          cursor: 'pointer',
          userSelect: 'none',
          ...sx
        }}
      />
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
