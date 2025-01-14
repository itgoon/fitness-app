import { Box, Stack, SwipeableDrawer, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import Icon from 'src/components/Icon';

interface DateSelectDrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onDateChange: (date: dayjs.Dayjs) => void;
}

export default function DateSelectDrawer({
  isOpen,
  onOpen,
  onClose,
  onDateChange
}: DateSelectDrawerProps) {
  const today = dayjs();

  const list = useMemo(
    () => [today, today.add(1, 'month'), today.add(2, 'month')],
    []
  );

  const handleMonth = (date: dayjs.Dayjs) => {
    onDateChange(date);
    onClose();
  };

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      aria-hidden="false"
    >
      <Stack>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3
          }}
        >
          <Typography variant="Body20/bold">날짜를 선택해주세요</Typography>
          <Icon name="Close" size={24} onClick={onClose} />
        </Box>
        <Stack>
          {list.map((item, idx) => (
            <Box
              key={dayjs(item).format('YYYY년 MM월')}
              sx={{ py: 2 }}
              onClick={() => handleMonth(item)}
            >
              <Typography variant="Body18/regular">
                {dayjs(item).format('YYYY년 MM월')}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </SwipeableDrawer>
  );
}
