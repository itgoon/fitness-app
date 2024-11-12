import { Box, Typography, useTheme } from '@mui/material';
import { useModal } from '../../../hooks/useModal';

interface IRecordBottom {
  selectImageCount: number;
  onSelectAll: () => void;
  onDelete: () => void;
}
export default function RecordBottom({
  selectImageCount,
  onSelectAll,
  onDelete
}: IRecordBottom) {
  const { palette } = useTheme();
  const primary = palette.primary.main;
  const errorDk = palette.error.dark;
  const borderTop = palette.grey[200];

  const { openConfirm } = useModal();
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      width={'100%'}
      height={56}
      px={2.5}
      py={2}
      position={'absolute'}
      left={0}
      bottom={0}
      borderTop={`1px solid ${borderTop}`}
    >
      <Typography
        variant={'Body14/regular'}
        color={primary}
        children={`전체 선택`}
        onClick={onSelectAll}
      />
      <Typography
        variant={'Body16/semiBold'}
        children={`${selectImageCount}개 선택됨`}
      />
      <Typography
        variant={'Body14/regular'}
        color={errorDk}
        children={`삭제`}
        onClick={() => {
          if (selectImageCount !== 0) {
            openConfirm({
              title: '',
              content: `${selectImageCount}개의 기록을 삭제하시겠습니가?`,
              onClick: onDelete,
              onClose: () => {},
              clickMsg: '삭제',
              closeMsg: '취소',
              clickColor: 'error'
            });
          }
        }}
      />
    </Box>
  );
}
