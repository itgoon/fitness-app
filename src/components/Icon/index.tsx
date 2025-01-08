import * as MUIICON from '@mui/icons-material';
import { useMemo } from 'react';
import * as SVGICON from '../../assets/svgs';
import { IconProps } from './types';

// ----------------------------------------------------------------------

export default function Icon({
  name,
  size = 14,
  height,
  color,
  onClick,
  fill,
  sx,
  className
}: IconProps) {
  const LibraryIcon = (MUIICON as any)[name];
  const Component = LibraryIcon || (SVGICON as any)[name];

  const styleProps = useMemo(
    () => ({
      style: LibraryIcon
        ? {
            fontSize: `${size}px`,
            color,
            cursor: onClick !== undefined ? 'pointer' : 'auto',
            ...sx
          }
        : {
            width: size,
            height: size,
            color: color || 'inhreit',
            cursor: onClick !== undefined ? 'pointer' : 'auto',
            ...sx
          }
    }),
    [size, color, onClick, sx]
  );
  return Component ? (
    <Component {...styleProps} onClick={onClick} className={className} />
  ) : null;
}
