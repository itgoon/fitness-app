import { Divider, Stack } from '@mui/material';
import { CSSProperties, ReactElement, ReactNode } from 'react';

interface IWrap {
  children: ReactNode | ReactElement;
  sx?: CSSProperties;
  gap?: number;
  padding?: number;
}
export default function Wrap({ children, gap, padding, sx }: IWrap) {
  return (
    <>
      <Stack
        gap={gap ? gap : 1}
        padding={padding ? padding : 1}
        sx={{ px: 2.5, ...sx }}
      >
        {children}
      </Stack>
      <Divider color={'#ECEFF1'} sx={{ height: 8 }} />
    </>
  );
}
