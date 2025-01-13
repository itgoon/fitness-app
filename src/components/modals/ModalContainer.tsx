import { Box, SxProps } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';

interface ModalContainerProps {
  sx: SxProps;
}

export default forwardRef<
  HTMLDivElement,
  PropsWithChildren<ModalContainerProps>
>(({ children, sx }, ref) => (
  <Box
    ref={ref}
    tabIndex={-1}
    sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'background.paper',
      boxShadow: 24,
      borderRadius: 1,
      overflow: 'hidden',
      ...sx
    }}
  >
    {children}
  </Box>
));
