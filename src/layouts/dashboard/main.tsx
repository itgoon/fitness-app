import Box, { BoxProps } from '@mui/material/Box';
import { Container } from '@mui/material';

// ----------------------------------------------------------------------

export const SPACING = 0;

export default function Main({ children, sx, ...other }: BoxProps) {
  return (
    <Box
      component="main"
      sx={{
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        ...sx
      }}
      {...other}
    >
      <Container>{children}</Container>
    </Box>
  );
}
