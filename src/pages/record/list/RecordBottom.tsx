import { Box, Typography } from '@mui/material';
import DeleteModal from 'src/components/modals/DeleteModal';
import useModals from 'src/hooks/useModals';

interface RecordBottomProps {
  count: number;
  onAllSelect: () => void;
  onDelete: () => void;
}

export default function RecordBottom({
  count = 0,
  onAllSelect,
  onDelete
}: RecordBottomProps) {
  const { modals, addModal, removeModal } = useModals();

  const handleDeleteModal = () => {
    // if (count === 0) return;

    addModal(
      <DeleteModal
        title={`${count}개의 기록을 삭제하시겠습니까?`}
        onClose={removeModal}
        onDelete={onDelete}
      />
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        height: 56,
        px: 2.5,
        py: 2,
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 999,
        bgcolor: 'white',
        borderTop: '1px solid',
        borderColor: 'grey.200'
      }}
    >
      <Box sx={{ width: 52, textAlign: 'start' }}>
        <Typography
          variant="Body14/regular"
          color="primary.main"
          onClick={onAllSelect}
        >
          전체 선택
        </Typography>
      </Box>

      <Box sx={{ flex: 1, textAlign: 'center' }}>
        <Typography variant="Body16/semiBold">{count}개 선택됨</Typography>
      </Box>

      <Box sx={{ width: 52, textAlign: 'end' }}>
        <Typography
          variant="Body14/regular"
          color="error.dark"
          onClick={handleDeleteModal}
        >
          삭제
        </Typography>
      </Box>

      {modals}
    </Box>
  );
}
