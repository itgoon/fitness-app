import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import Main from 'src/components/common/Main';
import { useLocation } from 'react-router';
import StackHeader from 'src/components/common/headers/StackHeader';
import { getLayoutConfig } from 'src/utils/getLayoutConfig';
import { Menu, menus } from './config';

// ----------------------------------------------------------------------

export default function StackNaviLayout({ children }: PropsWithChildren) {
  const currentLocation = useLocation().pathname;

  const config = getLayoutConfig<Menu>(menus, currentLocation);

  const hasHeader = config?.hasHeader ?? false;

  console.log(config);

  return (
    <Box
      minHeight={1}
      display="flex"
      height="100%"
      width="100%"
      overflow="hidden"
      flexDirection="column"
    >
      <Main sx={{ pt: config?.title ? 7 : 0 }}>
        {hasHeader && <StackHeader title={config?.title} />}
        {children}
      </Main>
    </Box>
  );
}
