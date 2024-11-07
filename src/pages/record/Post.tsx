import { Box, Stack, Typography, useTheme } from '@mui/material';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import PostItem from './PostItem';
import DatePicker from '../../components/custom/calendar/DatePicker';
import { useState } from 'react';
import dayjs from 'dayjs';

export default function Post() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey200 = palette.grey[200];
  const grey600 = light ? palette.grey[600] : 'white';

  const [date, setDate] = useState(dayjs());
  const onChange = (e: any) => {
    const newDate = e.currentTarget.textContent;
    setDate(newDate);
  };
  return (
    <Stack height={'100%'} pt={3} px={2.5} justifyContent={'space-between'}>
      <Stack gap={4}>
        <Stack
          width={80}
          height={80}
          border={`1px solid ${grey200}`}
          borderRadius={1}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Icon name={'CameraSvg'} size={24} />
          <Box>
            <Typography
              color={'#2962FF'}
              variant={'Body14/regular'}
              children={'0'}
            />
            <Typography
              color={grey600}
              variant={'Body14/regular'}
              children={'/10'}
            />
          </Box>
        </Stack>

        <PostItem label="어떤 기록을 남기시나요">
          <Box display={'flex'} gap={2}>
            <Button variant={'outlined'} children={'운동'} />
            <Button variant={'outlined'} children={'식단'} />
          </Box>
        </PostItem>

        <PostItem label="날짜">
          <DatePicker onChange={onChange} />
        </PostItem>
        <PostItem label="어떤 기록을 남기시나요">
          <Box display={'flex'} gap={2}>
            3
          </Box>
        </PostItem>
      </Stack>

      <Button
        variant={'contained'}
        color={'primary'}
        size={'large'}
        typoVariant={'Body18/semiBold'}
        children={'등록하기'}
      />
    </Stack>
  );
}
