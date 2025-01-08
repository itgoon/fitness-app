import { Box, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import Icon from '../../../components/Icon';
import { IRecordHeader } from '../types';
/**
 * 기록 화면 헤더
 */
export default function RecordHeader({ isEdit, handleEdit }: IRecordHeader) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const black = light ? palette.common.black : palette.common.white;
  const grey900 = light ? palette.grey[900] : palette.common.white;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={2}
      py={1.9}
    >
      <Box width={18} display="flex">
        {!isEdit && (
          <Icon
            name="AddRounded"
            sx={{ marginTop: -1, marginLeft: -2, color: '#262626' }}
            size={24}
            onClick={() => navigate('/record/post')}
          />
        )}
      </Box>

      <Box flex={1}>
        <Typography
          variant="Body18/bold"
          children="기록"
          color={black}
          sx={{ display: 'flex', justifyContent: 'center' }}
        />
      </Box>
      <Box width={28} display="flex" justifyContent="end">
        {!isEdit ? (
          <Icon size={22} name="MoreVertRounded" onClick={handleEdit} />
        ) : (
          <Typography
            variant="Body16/light"
            children="취소"
            color={grey900}
            onClick={handleEdit}
            noWrap
            sx={{ display: 'flex', justifyContent: 'center' }}
          />
        )}
      </Box>
    </Box>
  );
}
