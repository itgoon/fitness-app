import { Typography } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function CardTitle({ children }: PropsWithChildren) {
  return <Typography variant="Body18/bold">{children}</Typography>;
}
