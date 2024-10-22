import { MultiSectionDigitalClock } from '@mui/x-date-pickers';
import { ITimePicker } from './types';
import { Drawer, Typography } from '@mui/material';
import Button from '../Button';

export default function TimePicker({
  open,
  onClose,
  title,
  onChange,
  onClick
}: ITimePicker) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="bottom"
      sx={{
        '.MuiPaper-root': { padding: '32px 20px 20px !important', gap: 3 }
      }}
    >
      <Typography variant="Body20/semiBold" children={title} />
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
