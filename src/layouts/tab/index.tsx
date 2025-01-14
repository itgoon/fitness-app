import { useLocation } from 'react-router';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import Footer from 'src/components/common/Footer';
import NavBottom from 'src/components/common/NavBottom';
import Main from 'src/components/common/Main';
import Header from 'src/components/common/headers/Header';
import { getLayoutConfig } from 'src/utils/getLayoutConfig';
import { Menu, menus } from './config';

// ----------------------------------------------------------------------

export default function TabNaviLayout({ children }: PropsWithChildren) {
  const currentLocation = useLocation().pathname;

  const config = getLayoutConfig<Menu>(menus, currentLocation);

  const hasHeader = config?.hasHeader ?? false;
  const hasBottom = config?.hasBottom ?? false;
  const hasFooter = config?.hasFooter ?? false;
  const hasSpacing = config?.hasSpacing ?? false;

  // current에 따라 헤더 아이콘 결정

  return (
    <Box
      minHeight={1}
      display="flex"
      height="100%"
      width="100%"
      overflow="hidden"
      flexDirection="column"
    >
      <Main sx={{ pb: hasBottom ? 8 : 0, pt: hasSpacing ? 7 : 0 }}>
        {hasHeader && <Header title={config?.title || ''} />}
        {children}
        {hasFooter && <Footer />}
      </Main>
      {hasBottom && <NavBottom />}
    </Box>
  );
}
