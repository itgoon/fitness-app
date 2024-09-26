import * as MUIICON from '@mui/icons-material';
import * as SVGICON from '../../assets/svgs';
import { useEffect, useMemo, useRef } from 'react';
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
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (svgRef.current && fill) {
      const paths = svgRef.current.querySelectorAll('path');
      paths.forEach((path) => {
        path.setAttribute('fill', `${fill} !important`); // fill 속성 설정
      });
    }
  }, [fill]);

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
          },
      ref: svgRef // ref를 여기서 추가
    }),
    [size, color, onClick, sx]
  );
  return Component ? (
    <Component {...styleProps} onClick={onClick} className={className} />
  ) : null;
}
