import { Box, BoxProps } from '@mui/material';

export default function Main({ children, sx }: BoxProps) {
  return (
    <Box
      component="main"
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </Box>
  );
}
