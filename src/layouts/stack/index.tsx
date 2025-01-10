import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import Main from './main';

// ----------------------------------------------------------------------

export default function StackNaviLayout({ children }: PropsWithChildren) {
  return (
    <Box
      minHeight={1}
      display="flex"
      height="100%"
      width="100%"
      overflow="hidden"
      flexDirection={{ xs: 'column', lg: 'row' }}
    >
      <Main>{children}</Main>
    </Box>
  );
}
