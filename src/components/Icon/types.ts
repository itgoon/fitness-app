// ----------------------------------------------------------------------

import * as ANTDICON from '@ant-design/icons';
import * as MUIICON from '@mui/icons-material';
import * as SVGICON from 'assets/svgs';
import { CSSProperties } from 'react';

type AntDesignIconsType = keyof typeof ANTDICON;
type MUIIconsType = keyof typeof MUIICON;
type SVGIconsType = keyof typeof SVGICON;

export type IconsType = AntDesignIconsType | MUIIconsType | SVGIconsType;

export type IconProps = {
  name: IconsType;
  size?: number;
  color?: string;
  onClick?: any;
  sx?: CSSProperties;
  fill?: string;
  className?: string;
};
