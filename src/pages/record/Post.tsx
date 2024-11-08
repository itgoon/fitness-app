import { Box, Input, Stack, Typography, useTheme } from '@mui/material';
import Button from '../../components/Button';
import Icon from '../../components/Icon';
import PostItem from './PostItem';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import CalenderModal from '../../components/custom/calendar/CalendarModal';
import { DateReqFormat } from '../../utils/formatTime';
import TextField from '../../components/TextField';

export default function Post() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey200 = palette.grey[200];
  const grey600 = light ? palette.grey[600] : 'white';

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    date: dayjs().format(DateReqFormat),
    content: ''
  });
  const [isDisable, setIsDisable] = useState(true);

  useEffect(() => {
    console.log(data.content);
    if (data.content.length > 5) {
      setIsDisable(false);
    }
  }, [data.content]);

  const onChange = (e: any) => {
    setData((prev) => ({ ...prev, date: dayjs(e).format(DateReqFormat) }));
  };

  const handleSubmit = () => {};

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
          <Input
            className="custom-datePicker"
            value={data.date}
            onClick={() => setIsOpen((prev) => !prev)}
            endAdornment={<Icon name="PickerCalendarSvg" size={24} />}
          ></Input>
          <CalenderModal
            open={isOpen}
            onClose={() => setIsOpen((prev) => !prev)}
            onChange={onChange}
          />
        </PostItem>
        <PostItem label="한줄 메모">
          <TextField
            size={'large'}
            placeholder={'내용을 입력해주세요. (최대 20자)'}
            onChange={(e) =>
              setData((prev) => ({ ...prev, content: e.target.value }))
            }
          ></TextField>
        </PostItem>
      </Stack>

      <Button
        variant={'contained'}
        color={'primary'}
        size={'large'}
        typoVariant={'Body18/semiBold'}
        children={'등록하기'}
        disabled={isDisable}
      />
    </Stack>
  );
}
