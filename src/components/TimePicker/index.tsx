import { MultiSectionDigitalClock } from '@mui/x-date-pickers';
import { MenuItem } from '@mui/material';

export default function TimePicker() {
  const hourSuffix = '시';
  const minuteSuffix = '분';

  const customSlots = {
    digitalClockSectionItem: ({
      value,
      type
    }: {
      value: number;
      type: 'hours' | 'minutes';
    }) => (
      <MenuItem>
        {value} {type === 'hours' ? hourSuffix : minuteSuffix}
      </MenuItem>
    )
  };

  return (
    <MultiSectionDigitalClock timeSteps={{ minutes: 1 }} slots={customSlots} />
  );
}
