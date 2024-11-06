import { Stack, Typography, useTheme } from '@mui/material';
import Icon from '../../Icon';
import { IExpansionQR } from './types';
import React, { useState } from 'react';

export default function ExpansionQR({ centerData, onBack }: IExpansionQR) {
  const theme = useTheme();
  const gray600 = theme.palette.grey[600];

  const layoutSx = {
    width: 350,
    backgroundColor: 'white',
    justifyContent: 'space-between'
  };
  const [isCenter, setIsCenter] = useState(false);

  const handleCenter = (event: React.MouseEvent) => {
    event?.stopPropagation();
    setIsCenter((prev) => !prev);
  };

  return (
    <>
      {!isCenter ? (
        <Stack height={456} py={5} px={5.9} sx={layoutSx} onClick={onBack}>
          <Icon name="QrCardBigSvg" size={256} />
          <Stack alignItems={'center'} gap={0.5}>
            <Typography
              variant="Body24/bold"
              children={'출입 QR코드'}
              onClick={handleCenter}
            />
            <Typography
              textAlign={'center'}
              px={4}
              variant={'Body15/light'}
              onClick={handleCenter}
              children={'입장 시 시설 담당자나 바코드에 QR코드를 보여주세요.'}
            />
          </Stack>
        </Stack>
      ) : (
        <Stack height={424} pt={5} px={4} pb={3} sx={layoutSx} onClick={onBack}>
          <Typography
            variant="Body24/bold"
            children={'센터 정보'}
            onClick={handleCenter}
          />
          <Stack>
            {centerData.map((center, key) => (
              <Stack gap={1} py={1} key={key}>
                <Typography
                  color={gray600}
                  variant={'Body16/light'}
                  children={center.label}
                />
                <Typography variant="Body16/regular" children={center.value} />
              </Stack>
            ))}
          </Stack>
        </Stack>
      )}
    </>
  );
}
