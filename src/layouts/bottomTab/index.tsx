import { useLocation } from 'react-router';
import { Box } from '@mui/material';
import { PropsWithChildren } from 'react';
import Main from './main';
import Footer from './footer';
import NavBottom from './navBottom';
import { Menu, menus } from './config';
import Header from './header';

// ----------------------------------------------------------------------

const getMenuItemByPath = (menu: Menu[], path: string): Menu | null => {
  const traverse = (menuItem: Menu): Menu | null => {
    if (menuItem.url === path) {
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

  return (
    <Box
      minHeight={1}
      display="flex"
      height="100%"
      width="100%"
      overflow="hidden"
      flexDirection={{ xs: 'column', lg: 'row' }}
    >
      {isHeader && <Header currentData={current} />}
      <Main sx={{ paddingBottom: isBottom ? 8 : 0 }}>
        {children}
        {isFooter && <Footer />}
      </Main>
      {isBottom && <NavBottom />}
    </Box>
  );
}
