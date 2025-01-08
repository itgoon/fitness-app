/* eslint-disable no-nested-ternary */
/* eslint-disable prefer-destructuring */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable consistent-return */
import { ReactNode } from 'react';

import Main from './main';
import NavBottom from './navBottom';
import Footer from './footer';
import { useLocation } from 'react-router';
import Header from '../../components/custom/Header';
import { useEditContext } from '../../hooks/useEditState';
import { NavItemType, menus } from '../../data/menus';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

type Props = {
  children: ReactNode;
};

const getMenuItemByPath = (
  menu: NavItemType[],
  path: string
): NavItemType | null => {
  const traverse = (menuItem: NavItemType): NavItemType | null => {
    if (menuItem.url === path) {
      return menuItem;
    }
    return null;
  };
  for (const item of menu) {
    if (traverse(item)) {
      return traverse(item);
    }
  }

  return null;
};

export default function DashboardLayout({ children }: Props) {
  const currentLocation = useLocation().pathname;
  const current = getMenuItemByPath(menus, currentLocation);

  const isHeader = current?.isHeader ?? false;
  const isBottom = current?.isBottom ?? false;
  const isFooter = current?.isFooter ?? false;
  const { isEdit, toggleEdit } = useEditContext();

  return (
    <Box
      minHeight={1}
      display={'flex'}
      height={'100%'}
      width={'100%'}
      overflow={'hidden'}
      flexDirection={{ xs: 'column', lg: 'row' }}
    >
      {isHeader && <Header currentData={current} />}
      <Main sx={{ paddingBottom: isBottom ? 8 : 0 }}>
        {children}
        {isFooter && <Footer />}
      </Main>
      {isBottom && !isEdit && <NavBottom />}
    </Box>
  );
}
