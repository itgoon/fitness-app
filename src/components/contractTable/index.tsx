import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';

export default function ContractTable({ children }: PropsWithChildren) {
  return (
    <Stack sx={{ border: '1px solid', borderColor: 'grey.200' }}>
      {children}
    </Stack>
  );
}
