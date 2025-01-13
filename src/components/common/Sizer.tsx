import { Stack } from '@mui/material';
import { ReactNode } from 'react';

interface SizerProps {
  children: ReactNode;
  px?: number;
}
export default function Sizer({ children, px }: SizerProps) {
  return <Stack sx={{ px: px || 2.5, height: '100%' }}>{children}</Stack>;
}
