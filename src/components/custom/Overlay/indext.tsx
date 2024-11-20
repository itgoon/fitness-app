import { Box } from '@mui/material';
import { ReactNode } from 'react';

const layoutSx = {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100vh',
  zIndex: 1
};
interface IOverlay {
  bgcolor?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}
export default function Overlay({
  bgcolor = '#00000033',
  children,
  isOpen = true,
  onClose
}: IOverlay) {
  return (
    <>
      {isOpen && (
        <Box sx={{ ...layoutSx }} bgcolor={bgcolor} onClick={onClose}>
          {children}{' '}
        </Box>
      )}
    </>
  );
}
