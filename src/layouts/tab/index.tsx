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

  const isHeader = config?.isHeader ?? false;
  const isBottom = config?.isBottom ?? false;
  const isFooter = config?.isFooter ?? false;
  const isSpacing = config?.isSpacing ?? false;

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
      <Main sx={{ pb: isBottom ? 8 : 0, pt: isSpacing ? 7 : 0 }}>
        {isHeader && <Header title={config?.title || ''} />}
        {children}
        {isFooter && <Footer />}
      </Main>
      {isBottom && <NavBottom />}
    </Box>
  );
}
