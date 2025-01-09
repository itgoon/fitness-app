import { Box, Chip, Divider, Stack, Typography, useTheme } from '@mui/material';

import { useLocation, useNavigate } from 'react-router';
import { useModal } from '../../../hooks/useModal';
import Icon from '../../../components/Icon';
import EmptyCard from '../../../components/custom/customCard/EmptyCard';
import ListItem from './ListItem';
import Button from '../../../components/Button';

export default function ReservationCardDetail() {
  const { openConfirm } = useModal();

  const location = useLocation();
  const navigate = useNavigate();

  const date = '2025-01-09';
  const onCancelled = () => {
    navigate(`/schedule/reservation/cancelled/${date}`);
  };

  const theme = useTheme();

  const light = theme.palette.mode === 'light';

  const grey600 = light ? theme.palette.grey[600] : 'white';

  return (
    <Stack gap={2.5} pt={5} px={2.5} height="calc(100% - 56px)">
      <Box
        pt={6.5}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1
        }}
      >
        <Icon name="Orange" size={60} />

        <Stack gap={0.5}>
          <Typography variant="Body14/light" color={grey600}>
            레슨 예약 시간
          </Typography>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <Typography variant="Body28/semiBold">오전 9:00</Typography>

            <Chip size="small" color="warning" label="예약" />
          </Box>
        </Stack>
      </Box>

      <Divider />

      <EmptyCard>
        <Stack width="100%" px={2.5} gap={0.5}>
          <ListItem label="장소" value="리온짐" />
          <ListItem label="레슨" value="[Lv1] 10회" />
          <ListItem label="횟수" value="3회차" />
          <ListItem label="담당 강사" value="홍길동" />
        </Stack>
      </EmptyCard>

      <Button
        size="small"
        variant="outlined"
        color="error"
        onClick={() =>
          openConfirm({
            title: '',
            content: '정말로 예약을 취소하시겠습니까?',
            onClick: () => onCancelled(),
            clickMsg: '예약취소',
            closeMsg: '아니요',
            clickColor: 'error'
          })
        }
      >
        예약 취소
      </Button>
    </Stack>
  );
}
