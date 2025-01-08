import { Stack, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import QRCode from './QRCode';
import { IExpansionQR } from './types';

export default function ExpansionQR({ centerData, onBack }: IExpansionQR) {
  const { palette } = useTheme();
  const gray600 = palette.grey[600];

  const [isCenter, setIsCenter] = useState(false);

  const handleCenterToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsCenter((prev) => !prev);
  };

  const renderQRCodeSection = () => (
    <Stack
      height={456}
      gap={5}
      alignItems="center"
      justifyContent="center"
      bgcolor="white"
      onClick={onBack}
    >
      <Stack border="1px solid black">
        <QRCode size={256} margin={1} />
      </Stack>
      <Stack alignItems="center" gap={0.5}>
        <Typography variant="Body24/bold" onClick={handleCenterToggle}>
          출입 QR코드
        </Typography>
        <Typography
          textAlign="center"
          px={4}
          variant="Body15/light"
          onClick={handleCenterToggle}
        >
          입장 시 시설 담당자나 바코드에 QR코드를 보여주세요.
        </Typography>
      </Stack>
    </Stack>
  );

  const renderCenterInfoSection = () => (
    <Stack
      minWidth={340}
      height={424}
      justifyContent="center"
      px={4}
      gap={3}
      bgcolor="white"
      onClick={onBack}
    >
      <Typography variant="Body24/bold" onClick={handleCenterToggle}>
        센터 정보
      </Typography>
      <Stack>
        {centerData?.map((center, index) => (
          <Stack gap={1} py={1} key={index}>
            <Typography color={gray600} variant="Body16/light">
              {center.label}
            </Typography>
            <Typography variant="Body16/regular">{center.value}</Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );

  return isCenter ? renderCenterInfoSection() : renderQRCodeSection();
}
