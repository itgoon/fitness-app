import { PropsWithChildren } from 'react';
import { Box } from '@mui/material';
import Main from 'src/components/common/Main';
import { Prev } from 'src/components/Icon/HeaderIcon';
import { useLocation, useNavigate } from 'react-router';
import Header from 'src/components/common/Header';
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
  const navigate = useNavigate();

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
      {isHeader && (
        <Header
          left={<Prev onClick={() => navigate(-1)} />}
          title={current?.title}
        />
      )}

      <Main sx={{ pt: current?.title ? 7 : 0 }}>{children}</Main>
    </Box>
  );
}
