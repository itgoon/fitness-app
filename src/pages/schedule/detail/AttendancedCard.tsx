import { Box, Chip, Divider, Stack, Typography, useTheme } from '@mui/material';

import Icon from '../../../components/Icon';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
import ListItem from './ListItem';

export default function AttendancedCard() {
  const theme = useTheme();

  const light = theme.palette.mode === 'light';

  const grey600 = light ? theme.palette.grey[600] : 'white';

  return (
    <>
      <Box
        pt={6.5}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <Icon name="BlueLargeSvg" size={60} />

        <Stack gap={0.5}>
          <Typography variant="Body14/light" color={grey600}>
            총 운동 시간
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Typography variant="Body28/semiBold">오전 9:00</Typography>
            <Chip size="small" color="primary" label="출석" />
          </Box>
        </Stack>
      </Box>

      <Divider />

      <EmptyCard>
        <Stack width="100%" px={2.5} gap={0.5}>
          <ListItem label="메모" value="등산" />
          <ListItem label="레슨 시작" value="18:00" />
          <ListItem label="레슨 종료" value="19:00" />
        </Stack>
      </EmptyCard>
    </>
  );
}
