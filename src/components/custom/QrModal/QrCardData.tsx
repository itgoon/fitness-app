import {
  Box,
  LinearProgress,
  Stack,
  Typography,
  useTheme
} from '@mui/material';
import dayjs from 'dayjs';
import { getRemainDays } from '../../../utils/formatTime';
import { useEffect, useState } from 'react';
import Button from '../../Button';
import { IQrCardData } from './types';
import { useNavigate } from 'react-router';
import QRCode from './QRCode';

export default function QrCardData({
  customerData,
  onClick,
  onClose
}: IQrCardData) {
  const navigate = useNavigate();
  const { palette } = useTheme();
  const contrast = '#9CAFEC';
  const white = palette.common.white;

  const [isDetail, setIsDetail] = useState(false);
  const [remainDay, setRemainDay] = useState<number>(0);
  const [timer, setTimer] = useState<number>(100);

  // 더미 고객 데이터
  const { centerName, lesson, contractDate, effectiveDate } = customerData;

  useEffect(() => {
    const endDay = dayjs(effectiveDate.value);
    setRemainDay(getRemainDays(dayjs(), endDay) + 1);
  }, [effectiveDate.value]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1.6;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const renderMainContent = () => (
    <Stack height="100%" justifyContent="space-between" py={5} px={2.5}>
      <Stack gap={0.5} onClick={() => setIsDetail((prev) => !prev)}>
        <Typography variant="Body14/light" color={contrast}>
          {lesson.value}
        </Typography>
        <Typography variant="Body24/semiBold" color={white}>
          {centerName.value}
        </Typography>
        <Typography variant="Body14/light" color={contrast}>
          {`${contractDate.value} ~ ${effectiveDate.value}`}
        </Typography>
      </Stack>

      <QRCode onClick={onClick} />

      <Stack gap={1}>
        <LinearProgress
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            height: 8,
            '.MuiLinearProgress-bar': {
              backgroundColor: '#fff'
            }
          }}
          variant="determinate"
          value={timer}
        />
        <Typography color={white}>
          <span>{remainDay} </span>
          <span style={{ color: contrast }}>일 후 만료</span>
        </Typography>
      </Stack>
    </Stack>
  );

  const renderExpiredMessage = () => (
    <Stack
      height="100%"
      justifyContent="center"
      alignItems="center"
      py={5}
      px={2.5}
    >
      <Typography variant="Body24/semiBold" color={white}>
        사용권이 만료되었습니다.
      </Typography>
    </Stack>
  );

  const renderDetailContent = () => (
    <Stack height="100%" pt={5} px={2.5} pb={3} gap={3}>
      <Stack onClick={() => setIsDetail((prev) => !prev)}>
        {Object.entries(customerData).map(([key, data]) => (
          <Box key={key} display="flex" py={1} justifyContent="space-between">
            <Typography variant="Body16/regular" color={white}>
              {data.label}
            </Typography>
            <Typography variant="Body16/semiBold" color={white}>
              {data.value}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Stack gap={1}>
        <Button
          typoVariant="Body14/semiBold"
          style={{ backgroundColor: white }}
          size="small"
          onClick={() => {
            navigate('/reservation');
            if (onClose) onClose();
          }}
        >
          예약하기
        </Button>
        <Button
          typoColor={white}
          typoVariant="Body14/semiBold"
          onClick={() => {
            navigate('/viewcontract');
            if (onClose) onClose();
          }}
        >
          계약서 보기
        </Button>
      </Stack>
    </Stack>
  );
  // TODO: 시간 초과로 갱신 혹은 새로고침 화면이 있었야할 것 같음
  if (timer === 0) return null;
  return (
    <>
      {!isDetail
        ? remainDay > 0
          ? renderMainContent()
          : renderExpiredMessage()
        : renderDetailContent()}
    </>
  );
}
