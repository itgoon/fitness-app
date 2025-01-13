import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import Main from 'src/components/common/Main';
import { useLocation } from 'react-router';
import StackHeader from 'src/components/common/headers/StackHeader';
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

export default function StackNaviLayout({ children }: PropsWithChildren) {
  const currentLocation = useLocation().pathname;

  const current = getMenuItemByPath(menus, currentLocation);

  const isHeader = current?.title ?? false;

  return (
    <Box
      minHeight={1}
      display="flex"
      height="100%"
      width="100%"
      overflow="hidden"
      flexDirection="column"
    >
      <Main sx={{ pt: current?.title ? 7 : 0 }}>
        {isHeader && <StackHeader title={current?.title} />}
        {children}
      </Main>
    </Box>
  );
}
