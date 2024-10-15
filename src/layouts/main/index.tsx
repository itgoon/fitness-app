import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ReactNode } from 'react';

import { useResponsive } from 'src/hooks/useResponsive';

// ----------------------------------------------------------------------

type Props = {
  image?: string;
  children: ReactNode;
};

export default function MainLayout({ children, image }: Props) {
  const mdUp = useResponsive('up', 'md');

  return (
    <Stack
      component="main"
      direction="row"
      sx={{
        minHeight: '100vh',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          width: '100%',
          mx: 'auto',
          px: { xs: 2, md: 8 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {children}
        asdf
      </Box>
    </Stack>
  );
}
