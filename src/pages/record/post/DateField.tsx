import { Input, Stack } from '@mui/material';
import FieldTitle from './FieldTitle';
import CalenderModal from 'src/components/custom/calendar/CalendarModal';
import { useFormContext } from 'react-hook-form';
import Icon from 'src/components/Icon';
import dayjs from 'dayjs';
import { DateReqFormat } from 'src/utils/formatTime';
import { useState } from 'react';

export default function DateField() {
  const { setValue, watch } = useFormContext();

  const [isOpen, setIsOpen] = useState(false);

  const onDateChange = (e: any) => {
    setValue('rctDate', dayjs(e).format(DateReqFormat));
  };

  return (
    <Stack>
      <FieldTitle label="날짜" />
      <Input
        className="custom-datePicker"
        value={watch('rctDate')}
        onClick={() => setIsOpen((prev) => !prev)}
        endAdornment={<Icon name="PickerCalendarSvg" size={24} />}
      />

      <CalenderModal
        open={isOpen}
        onChange={onDateChange}
        onClose={() => setIsOpen((prev) => !prev)}
      />
    </Stack>
  );
}
