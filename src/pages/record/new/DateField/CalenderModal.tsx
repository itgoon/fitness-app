import { Modal } from '@mui/material';
import dayjs from 'dayjs';
import DateCalendar from 'src/components/dateCalendar';
import ModalContainer from 'src/components/modals/ModalContainer';
import CalendarHeader from './CalendarHeader';

interface CalenderModalProps {
  value: dayjs.Dayjs;
  onChange: (e: dayjs.Dayjs) => void;
  onClose: () => void;
}

export default function CalenderModal({
  value,
  onClose,
  onChange
}: CalenderModalProps) {
  return (
    <Modal open onClose={onClose}>
      <ModalContainer sx={{ width: 350, height: 344 }}>
        <DateCalendar
          value={value}
          onChange={onChange}
          slots={{ calendarHeader: (e) => <CalendarHeader {...e} /> }}
        />
      </ModalContainer>
    </Modal>
  );
}
