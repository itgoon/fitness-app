import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface ITabPanel {
  value: number;
  index: number;
  children: ReactNode;
}
export default function TabPanel({ value, index, children }: ITabPanel) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {children}
    </Box>
  );
}
