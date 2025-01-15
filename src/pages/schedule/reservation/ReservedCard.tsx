import { Box, Button, Chip, Divider, Stack } from '@mui/material';
import { useNavigate } from 'react-router';
import { ScheduleDto } from 'src/api';
import { getTimeCheck } from 'src/utils/formatTime';
import DetailCardTitle from 'src/components/custom/DetailCard/DetailCardTitle';
import DetailCardBody from 'src/components/custom/DetailCard/DetailCardBody';
import DetailCardInfo from 'src/components/custom/DetailCard/DetailCardInfo';
import DetailCardIcon from 'src/components/custom/DetailCard/DetailCardIcon';
import DetailCardSubTitle from 'src/components/custom/DetailCard/DetailCardSubtitle';
import useModals from 'src/hooks/useModals';
import DeleteModal from 'src/components/modals/DeleteModal';

interface ReservedCardProps {
  reservation: ScheduleDto | null;
}

export default function ReservedCard({ reservation }: ReservedCardProps) {
  const navigate = useNavigate();

  const { modals, addModal, removeModal } = useModals();

  const onCancle = () => {
    navigate(`/schedule/reservation/cancelled`, {
      state: { reservation }
    });
  };

  const handleCancleModal = () => {
    addModal(
      <DeleteModal
        title="정말로 예약을 취소하시겠습니까?"
        onClose={removeModal}
        onDelete={onCancle}
        leftLabel="아니요"
        rightLabel="예약 취소"
      />
    );
  };

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
        <DetailCardIcon iconName="Orange" />

        <Stack gap={0.5}>
          <DetailCardSubTitle>레슨 예약 시간</DetailCardSubTitle>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            <DetailCardTitle>
              {getTimeCheck(reservation?.schStartTime || '')}
            </DetailCardTitle>

            <Chip size="small" color="warning" label="예약" />
          </Box>
        </Stack>
      </Box>

      <Divider />

      <DetailCardBody>
        <DetailCardInfo label="장소" value="리온짐" />
        <DetailCardInfo label="레슨" value="[Lv1] 10회" />
        <DetailCardInfo label="횟수" value="3회차" />
        <DetailCardInfo label="담당 강사" value="홍길동" />
      </DetailCardBody>

      <Button
        size="small"
        variant="outlined"
        color="error"
        onClick={handleCancleModal}
      >
        예약 취소
      </Button>

      {modals}
    </>
  );
}
