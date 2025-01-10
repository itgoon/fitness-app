import { forwardRef } from 'react';
import Link from '@mui/material/Link';
import Box, { BoxProps } from '@mui/material/Box';
import { useTheme } from '@mui/material';
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const LogoMini = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();
    const isLightMode = theme.palette.mode === 'light';

    const logo = (
      <Box
        component="img"
        src={`/logo/${isLightMode ? 'logo' : 'logo_dark'}.png`}
        draggable="false"
        sx={{
          width: 72,
          height: 72,
          cursor: 'pointer',
          objectFit: 'none',
          objectPosition: '0 0',
          scale: 0.5,
          userSelect: 'none',
          ...sx
        }}
      />
    );

    if (disabledLink) return logo;

    return (
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default LogoMini;
