import { Stack, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import Icon from 'src/components/Icon';
import dayjs from 'dayjs';
import { DateReqFormat } from 'src/utils/formatTime';
import useModals from 'src/hooks/useModals';
import CalenderModal from './CalenderModal';
import FieldTitle from '../FieldTitle';

export default function DateField() {
  const { setValue, watch } = useFormContext();

  const { modals, addModal, removeModal } = useModals();

  const onDateChange = (e: dayjs.Dayjs) => {
    setValue('rctDate', dayjs(e).format(DateReqFormat));
    removeModal();
  };

  const handleCalendarModal = () => {
    addModal(
      <CalenderModal
        value={dayjs(watch('rctDate'))}
        onChange={onDateChange}
        onClose={removeModal}
      />
    );
  };

  return (
    <Stack>
      <FieldTitle label="날짜" />
      <TextField
        size="large"
        value={watch('rctDate')}
        onClick={handleCalendarModal}
        InputProps={{
          endAdornment: <Icon name="PickerCalendarSvg" size={24} />
        }}
      />

      {modals}
    </Stack>
  );
}
