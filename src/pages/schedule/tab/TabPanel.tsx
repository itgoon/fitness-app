import { Box } from '@mui/material';
import { ITabPanel } from './types';

export default function TabPanel({ value, index, children }: ITabPanel) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      px={2.5}
      py={3}
    >
      {children}
    </Box>
  );
}
