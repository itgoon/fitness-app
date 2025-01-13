import { Modal } from '@mui/material';
import ModalContainer from 'src/components/modals/ModalContainer';
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
      <ModalContainer
        sx={{
          width: 300,
          height: 400,
          backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(17, 85, 243, 0.6) 0%, rgba(0, 65, 219, 0.6) 100%),
          linear-gradient(106.31deg, #001EBF 0%, #001EBF 100%)
        `,
          py: 5,
          px: 2.5
        }}
      >
        {data ? <QrCard /> : <QrEmptyCard />}
      </ModalContainer>
    </Modal>
  );
}
