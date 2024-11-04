import { Box, Dialog } from '@mui/material';
import QrCardSvg from '../../../assets/svgs/Card.svg';
import QrCardData from './QrCardData';
import QrEmptyData from './QrEmptyData';
import { IQrModal } from './types';
import { QRCustomerData } from '../../../utils/dummy';

/**
 * ******************************************************
 * 회원권 탭 클릭 시 -> QrModal
 * 연동 정보 없을 때
 *
 * 연동 정보 있을 때 - 일반 화면
 * 센터 상세 정보 -> 계약서 가기
 * QR 클릭시 QR확대
 * ******************************************************
 */
export default function QrModal({
  customerData = QRCustomerData,
  open,
  onClose
}: IQrModal) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ '.MuiPaper-root': { backgroundColor: 'transparent' } }}
    >
      <Box
        width={300}
        height={400}
        sx={{
          backgroundImage: `url(${QrCardSvg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* gap={6.25}  */}
        {customerData === undefined ? (
          <QrEmptyData />
        ) : (
          <QrCardData customerData={customerData} />
        )}
      </Box>
    </Dialog>
  );
}
