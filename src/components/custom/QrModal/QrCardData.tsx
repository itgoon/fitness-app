import { Box, LinearProgress, Stack, Typography } from '@mui/material';
import Icon from '../../Icon';
import dayjs from 'dayjs';
import { getRemainDays } from '../../../utils/formatTime';
import { useEffect, useState } from 'react';
import Button from '../../Button';
import { IQrCardData } from './types';
import { useNavigate } from 'react-router';

export default function QrCardData({
  customerData,
  onClick,
  onClose
}: IQrCardData) {
  const navigate = useNavigate();

  const [isDetail, setIsDetail] = useState(false);
  const [remainDay, setRemainDay] = useState<number>(0);
  const [remainValue, setRemainValue] = useState<number>(0);

  if (!customerData) return;
  const { centerName, lesson, contractDate, effectiveDate } = customerData;

  const startDay = dayjs(contractDate.value).format('YYYY.MM.DD');
  const endDay = dayjs(effectiveDate.value).format('YYYY.MM.DD');

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setRemainDay(getRemainDays(dayjs(), endDay) + 1);
    remainProgress();
  }, [startDay, endDay]);

  // progress bar 의 현재 남은 값을 구하는 함수
  const remainProgress = () => {
    const remainDays = getRemainDays(startDay, endDay);
    const value = 100 / remainDays;
    const thisDay = 100 - (getRemainDays(dayjs(), endDay) + 1) * value;
    setRemainValue(thisDay);
  };

  return (
    <>
      {!isDetail ? (
        <>
          {remainDay !== 0 ? (
            <Stack
              height={'100%'}
              justifyContent={'space-between'}
              py={5}
              px={2.5}
            >
              <Stack gap={0.5} onClick={() => setIsDetail((prev) => !prev)}>
                <Typography
                  variant={'Body14/regular'}
                  color={'#9CAFEC'}
                  children={lesson.value}
                />
                <Typography
                  variant={'Body24/semiBold'}
                  color={'white'}
                  children={centerName.value}
                />
                <Typography
                  variant={'Body14/regular'}
                  color={'#9CAFEC'}
                  children={`${contractDate.value} ~ ${effectiveDate.value}`}
                />
              </Stack>
              <Icon name="QrCardSmallSvg" size={100} onClick={onClick} />
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
                  value={remainValue}
                />
                <Typography
                  color={'white'}
                  children={
                    <>
                      <span>{remainDay} </span>
                      <span style={{ color: '#9CAFEC' }}>일 후 만료</span>
                    </>
                  }
                />
              </Stack>
            </Stack>
          ) : (
            <Stack
              height={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
              py={5}
              px={2.5}
            >
              <Typography
                variant={'Body24/semiBold'}
                color={'white'}
                children={'사용권이 만료되었습니다.'}
              />
            </Stack>
          )}
        </>
      ) : (
        <Stack height={'100%'} pt={5} px={2.5} pb={3} gap={3}>
          <Stack onClick={() => setIsDetail((prev) => !prev)}>
            {Object.entries(customerData).map(([key, data]) => (
              <Box
                key={key}
                display={'flex'}
                py={1}
                justifyContent={'space-between'}
              >
                <Typography
                  variant={'Body16/regular'}
                  color={'white'}
                  children={data.label}
                />
                <Typography
                  variant={'Body16/semiBold'}
                  color={'white'}
                  children={data.value}
                />
              </Box>
            ))}
          </Stack>
          <Stack gap={1}>
            <Button
              typoVariant="Body14/semiBold"
              style={{ backgroundColor: 'white' }}
              size="small"
              children={'예약하기'}
              onClick={() => {
                navigate('/reservation');
                onClose && onClose();
              }}
            />
            <Button
              typoColor={'white'}
              typoVariant={'Body14/semiBold'}
              children={'계약서 보기'}
              onClick={() => {
                navigate('/viewcontract');
                onClose && onClose();
              }}
            />
          </Stack>
        </Stack>
      )}
    </>
  );
}
