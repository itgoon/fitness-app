import { useLocation } from 'react-router';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import Header from 'src/components/common/Header';
import Footer from 'src/components/common/Footer';
import NavBottom from 'src/components/common/NavBottom';
import Main from 'src/components/common/Main';
import { Menu, menus } from './config';

// ----------------------------------------------------------------------

const getMenuItemByPath = (menu: Menu[], path: string): Menu | null => {
  const traverse = (menuItem: Menu): Menu | null => {
    if (path.startsWith(menuItem.url)) {
      return menuItem;
    }
    return null;
  };

  return menu.reduce<Menu | null>((acc, item) => acc || traverse(item), null);
};

export default function BottomTabNaviLayout({ children }: PropsWithChildren) {
  const currentLocation = useLocation().pathname;
  const current = getMenuItemByPath(menus, currentLocation);

  const isHeader = current?.isHeader ?? false;
  const isBottom = current?.isBottom ?? false;
  const isFooter = current?.isFooter ?? false;

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
      {isHeader && <Header title={current?.title || ''} />}
      <Main sx={{ paddingBottom: isBottom ? 8 : 0 }}>
        {children}
        {isFooter && <Footer />}
      </Main>
      {isBottom && <NavBottom />}
    </Box>
  );
}
