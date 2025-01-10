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

  const location = useLocation();

  const currentLocation = useLocation().pathname;

  const current = getMenuItemByPath(menus, currentLocation);

  const title = current?.title || location.state.title;

  return (
    <Box
      minHeight={1}
      display="flex"
      height="100%"
      width="100%"
      overflow="hidden"
      flexDirection="column"
    >
      <Header left={<Prev onClick={() => navigate(-1)} />} title={title} />

      <Main>{children}</Main>
    </Box>
  );
}
