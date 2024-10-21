import { MultiSectionDigitalClock } from '@mui/x-date-pickers';
import { MenuItem, Typography } from '@mui/material';
import { useState } from 'react';

export default function TimePicker(props) {
  const [value, setValue] = useState<any>();
  // const handleChange = (value, selectionState, selectedView) => {
  //   console.log('value:  ', value);
  //   console.log(' selectionState:  ', selectionState);
  //   console.log('selectedView:  ', selectedView);
  // };

  console.log(value);
  const CustomDigitalClockSectionItem = ({ onClick, ...other }) => {
    const isHour = other['aria-label'] && other['aria-label'].includes('hours');
    const suffix = isHour ? '시' : '분';
    const handleItemClick = (e: any) => {
      setValue(other.children);
    };

    return (
      <MenuItem onClick={(e) => handleItemClick(e)}>
        <Typography
          variant="Body20/light"
          children={`${other.children} ${suffix}`}
        />
      </MenuItem>
    );
  };

  return (
    <MultiSectionDigitalClock
      timeSteps={{ minutes: 1 }}
      views={['hours', 'minutes']}
      value={value}
      slots={{
        digitalClockSectionItem: (props) => {
          return <CustomDigitalClockSectionItem {...props} />;
        }
      }}
      {...props}
    />
  );
}
