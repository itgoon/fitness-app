import { Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router';

export default function EmptyList() {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : 'white';
  const primaryligh = palette.primary.light;

  const navigate = useNavigate();
  return (
    <Stack
      height={'inherit'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={1.5}
    >
      <Stack alignItems={'center'}>
        <Typography
          variant={'Body20/bold'}
          children={'아직 등록된 기록이 없네요!'}
        />
        <Typography
          variant={'Body16/light'}
          color={grey600}
          paddingX={5.5}
          textAlign={'center'}
          children={
            '식단과 운동 기록을 사진과 영상으로 남겨 나의 루틴을 만들어보세요.'
          }
        />
      </Stack>
      <Typography
        color={primaryligh}
        variant={'Body16/light'}
        children={'신규 등록'}
        onClick={() => navigate('/record/post')}
      />
    </Stack>
  );
}
