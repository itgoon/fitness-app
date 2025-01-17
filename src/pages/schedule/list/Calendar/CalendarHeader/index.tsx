import { Box, Collapse, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import Icon from 'src/components/Icon';
import DateSelector from './DateSelector';

interface CalendarHeaderProps {
  value: dayjs.Dayjs;
  onChange: (value: dayjs.Dayjs) => void;
}

export default function CalendarHeader({
  value,
  onChange
}: CalendarHeaderProps) {
  const [isOpen, setisOpen] = useState(false);

  const handleChange = () => {
    setisOpen((prev) => !prev);
  };

  return (
    <Box
      component="header"
      sx={{
        position: 'fixed',
        top: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: 'background.paper'
      }}
    >
      <Box
        sx={{
          height: 56,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}
          onClick={handleChange}
        >
          <Typography variant="Body18/bold" sx={{ fontWeight: 600 }}>
            {dayjs(value).format('YYYY년 M월')}
          </Typography>
          <Icon name="KeyboardArrowDown" size={22} sx={{ color: 'grey' }} />
        </Box>
      </Box>
      <Collapse in={isOpen}>
        <DateSelector />
      </Collapse>
    </Box>
  );
}
