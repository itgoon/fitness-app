import { Box, Modal } from '@mui/material';
import { QRCustomerData } from 'src/utils/dummy';
import QrCard from './QrCard';
import QrEmptyCard from './QrEmptyCard';

interface QrModalProps {
  onClose: () => void;
}

export default function QrModal({ onClose }: QrModalProps) {
  const data = QRCustomerData;

  return (
    <Modal open onClose={onClose}>
      <Box
        sx={{
          perspective: '1000px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 300,
          height: 400
        }}
      >
        {data ? <QrCard /> : <QrEmptyCard />}
      </Box>
    </Modal>
  );
}
