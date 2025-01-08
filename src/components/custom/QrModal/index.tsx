import { Box, Dialog } from '@mui/material';
import { useState } from 'react';
import QrCardSvg from '../../../assets/svgs/Card.svg';
import QrCardData from './QrCardData';
import QrEmptyData from './QrEmptyData';
import { IQrModal } from './types';
import ExpansionQR from './ExpansionQR';

/**
 * ******************************************************
 * 회원권 탭 클릭 시 -> QrModal
 * 연동 정보 없을 때
 *
 * 연동 정보 있을 때 - 일반 화면
 * 센터 상세 정보 -> 계약서 가기
 * QR 클릭시 QR확대
 * 확대 화면에서 센터 정보 보기
 * ******************************************************
 */
export default function QrModal({
  customerData,
  centerData,
  open,
  onClose
}: IQrModal) {
  const [isBasic, setIsBasic] = useState(false);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        '.MuiPaper-root': {
          backgroundColor: 'transparent',
          borderRadius: !isBasic ? 2 : 2.5
        }
      }}
    >
      {!isBasic ? (
        <Box
          width={300}
          height={400}
          sx={{
            backgroundImage: `url(${QrCardSvg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {customerData === undefined ? (
            <QrEmptyData />
          ) : (
            <QrCardData
              customerData={customerData}
              onClick={() => setIsBasic((prev) => !prev)}
              onClose={onClose}
            />
          )}
        </Box>
      ) : (
        <ExpansionQR
          centerData={centerData}
          onBack={() => setIsBasic((prev) => !prev)}
        />
      )}
    </Dialog>
  );
}
