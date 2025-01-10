import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function DetailCardTitle({ children }: PropsWithChildren) {
  return <Typography variant="Body28/semiBold">{children}</Typography>;
}
