import Box, { BoxProps } from '@mui/material/Box';

import { useResponsive } from 'src/hooks/useResponsive';

import { useSettingsContext } from 'src/components/settings';

import { Container } from '@mui/material';
import { HEADER } from '../configLayout';

// ----------------------------------------------------------------------

export const SPACING = 0;

export default function Main({ children, sx, ...other }: BoxProps) {
  const settings = useSettingsContext();

  const lgUp = useResponsive('up', 'lg');

  const isNavMini = settings.themeLayout === 'mini';
  const miniHeader = HEADER.H_MOBILE - 8;
  return (
    <Box
      component="main"
      sx={{
        // flexGrow: 1,
        // minHeight: 1,
        // display: "flex",
        // flexDirection: "column",
        // pt: `${miniHeader}px`,
        pb: `${HEADER.H_MOBILE + SPACING}px`,
        height: '100vh',
        width: '100%',
        overflow: 'hidden',

        // ...(lgUp && {
        //   px: 2,
        //   py: `${HEADER.H_DESKTOP + SPACING}px`,
        //   width: `calc(100% - ${NAV.W_VERTICAL}px)`
        // }),
        ...sx
      }}
      {...other}
    >
      <Container>{children}</Container>
    </Box>
  );
}
