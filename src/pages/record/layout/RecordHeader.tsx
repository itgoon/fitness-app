import { Box, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';
import Icon from '../../../components/Icon';

interface IRecordHeader {
  isEdit: boolean;
  handleEdit: () => void;
}
export default function RecordHeader({ isEdit, handleEdit }: IRecordHeader) {
  const navigate = useNavigate();
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const black = light ? palette.common.black : palette.common.white;
  const grey900 = light ? palette.grey[900] : palette.common.white;
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      px={2}
      py={1.9}
    >
      <Box width={18} display={'flex'}>
        {!isEdit && (
          <Icon
            name={'PlusSvg'}
            sx={{ marginTop: '-1px', color: '#262626' }}
            size={18}
            onClick={() => navigate('/record/post')}
          />
        )}
      </Box>

      <Box flex={1}>
        <Typography
          variant="Body18/bold"
          children={'기록'}
          color={black}
          sx={{ display: 'flex', justifyContent: 'center' }}
        />
      </Box>
      <Box width={28} display={'flex'} justifyContent={'end'}>
        {!isEdit ? (
          <Icon
            size={22}
            name={'MoreSvg'}
            sx={{ transform: 'rotate(90deg)' }}
            onClick={handleEdit}
          />
        ) : (
          <Typography
            variant="Body16/light"
            children={'취소'}
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
