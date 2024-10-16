import { StackProps } from '@mui/material/Stack';
import { ListItemButtonProps } from '@mui/material/ListItemButton';
import { ReactElement } from 'react';

// ----------------------------------------------------------------------

export type NavItemStateProps = {
  open?: boolean;
  active?: boolean;
  subItem?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
};

export type NavItemBaseProps = {
  title: string;
  path: string;
  icon?: ReactElement;
  children?: {
    subheader: string;
    items: {
      title: string;
      path: string;
    }[];
  }[];
};

export type NavItemProps = ListItemButtonProps &
  NavItemBaseProps &
  NavItemStateProps;

export type NavListProps = {
  data: NavItemBaseProps;
};

export type NavSubListProps = StackProps & {
  data: NavItemBaseProps[];
  subheader: string;
};

export type NavProps = {
  data: NavItemBaseProps[];
};
