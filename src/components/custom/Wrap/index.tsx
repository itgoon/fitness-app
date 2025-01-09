import { Stack } from '@mui/material';
import { CSSProperties, ReactElement, ReactNode } from 'react';

interface IWrap {
  children: ReactNode | ReactElement;
  sx?: CSSProperties;
  gap?: number;
  padding?: number;
}
export default function Wrap({ children, gap = 1, padding = 1, sx }: IWrap) {
  return <Stack sx={{ px: 2.5, gap, padding, ...sx }}>{children}</Stack>;
}
