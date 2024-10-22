import { MultiSectionDigitalClock } from '@mui/x-date-pickers';
import { ITimePicker } from './types';
import { Drawer, Typography } from '@mui/material';
import Button from '../Button';

export default function TimePicker({
  open,
  onClose,
  isStart,
  onChange,
  onClick
}: ITimePicker) {
  // const handleTimeChange = (value) => {
  //   value = value ? dayjs(value).format('HH:mm') : '00:00';
  //   if (isStart) {
  //     setStartValue(value);
  //   } else {
  //     setEndValue(value);
  //   }
  // };

  // const saveWorkTime = () => {
  //   if (isStart) {
  //     setIsStart((prev: any) => !prev);
  //   } else {
  //     setIsEnd((prev: any) => !prev);
  //   }
  //   if (startValue !== '00:00' && endValue !== '00:00') {
  //     const today = dayjs().format(DateFormat); // 오늘 날짜 더해서 파싱

  //     const startTime = dayjs(`${today} ${startValue}`, TimeDateFormat);
  //     const endTime = dayjs(`${today} ${endValue}`, TimeDateFormat);
  //     const total = endTime.diff(startTime, 'minute');
  //     const hours = Math.floor(total / 60);
  //     const min = total % 60;
  //     setTotalTime(`${hours} 시간 ${min} 분`);
  //   }
  // };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="bottom"
      sx={{ '.MuiPaper-root': { padding: '32px 20px !important', gap: 3 } }}
    >
      <Typography
        variant="Body20/semiBold"
        children={
          isStart
            ? '운동 시작 시간을 선택해주세요'
            : '운동 종료 시간을 선택해주세요'
        }
      />
      <MultiSectionDigitalClock
        timeSteps={{ minutes: 1 }}
        views={['hours', 'minutes']}
        onChange={onChange}
      />
      <Button
        size="large"
        variant="contained"
        color="primary"
        children={'저장'}
        onClick={onClick}
      />
    </Drawer>
  );
}
