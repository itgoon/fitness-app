import { Button, Stack } from '@mui/material';
import { PickersDayProps } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { PropsWithChildren } from 'react';

export default function CustomDay({
  children,
  ...e
}: PropsWithChildren<PickersDayProps<dayjs.Dayjs>>) {
  const { day, selected, today, outsideCurrentMonth, onDaySelect } = e;

  return (
    <Stack sx={{ alignItems: 'center', gap: 0.5 }}>
      <Button
        onClick={() => onDaySelect(day)}
        sx={{
          width: 30,
          height: 30,
          borderRadius: '100%',
          padding: 0,
          minWidth: 'unset',
          minHeight: 'unset',
          fontSize: 15,
          fontWeight: 400,
          backgroundColor: selected ? 'primary.main' : 'unset',
          color: outsideCurrentMonth
            ? 'grey.400'
            : selected
              ? 'white'
              : 'unset',
          border: today ? '1px solid' : 'unset',
          borderColor: today ? 'primary.darker' : 'unset',
          '&:focus': {
            backgroundColor: 'primary.main'
          }
        }}
      >
        {dayjs(day).format('D')}
      </Button>
      {children}
    </Stack>
  );
}
