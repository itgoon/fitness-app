import * as MUIICON from '@mui/icons-material';
import * as SVGICON from '../../assets/svgs';
import { CSSProperties } from 'react';

type MUIIconsType = keyof typeof MUIICON;
type SVGIconsType = keyof typeof SVGICON;

export type IconsType = MUIIconsType | SVGIconsType;

export type IconProps = {
  name: IconsType;
  size?: number;
  height?: number;
  color?: string;
  onClick?: any;
  sx?: CSSProperties;
  fill?: string;
  className?: string;
};
