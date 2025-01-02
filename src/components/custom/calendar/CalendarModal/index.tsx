import { Dialog } from '@mui/material';
import DateCalendar from '../DateCalendar';
import { ICalenderModal } from '../types';

export default function CalenderModal({
  open,
  onClose,
  onChange
}: ICalenderModal) {
  return (
    <Dialog className="calendar-modal" open={open} onClose={onClose}>
      <DateCalendar
        onChange={onChange}
        isModal={true}
        isBadge={false}
      ></DateCalendar>
    </Dialog>
  );
}
