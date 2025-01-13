import { Container } from '@mui/material';
import Box, { BoxProps } from '@mui/material/Box';

// ----------------------------------------------------------------------

export const SPACING = 0;

export default function Main({ children, sx }: BoxProps) {
  return (
    <Box
      component="main"
      sx={{
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        ...sx
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
}
