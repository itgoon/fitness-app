import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { paths } from 'src/routes/paths';

interface CardBackProps {
  toggleCard: () => void;
}

export default function CardBack({ toggleCard }: CardBackProps) {
  const navigate = useNavigate();

  return (
    <Stack
      onClick={toggleCard}
      sx={{ height: '100%', justifyContent: 'space-between' }}
    >
      <Stack>
        <Box display="flex" py={1} justifyContent="space-between">
          <Typography variant="Body16/regular" color="white">
            센터명
          </Typography>
          <Typography variant="Body16/semiBold" color="white">
            리온짐
          </Typography>
        </Box>
        <Box display="flex" py={1} justifyContent="space-between">
          <Typography variant="Body16/regular" color="white">
            레슨
          </Typography>
          <Typography variant="Body16/semiBold" color="white">
            리온짐
          </Typography>
        </Box>
        <Box display="flex" py={1} justifyContent="space-between">
          <Typography variant="Body16/regular" color="white">
            레슨 횟수
          </Typography>
          <Typography variant="Body16/semiBold" color="white">
            리온짐
          </Typography>
        </Box>
        <Box display="flex" py={1} justifyContent="space-between">
          <Typography variant="Body16/regular" color="white">
            담당강사
          </Typography>
          <Typography variant="Body16/semiBold" color="white">
            리온짐
          </Typography>
        </Box>
        <Box display="flex" py={1} justifyContent="space-between">
          <Typography variant="Body16/regular" color="white">
            계약일자
          </Typography>
          <Typography variant="Body16/semiBold" color="white">
            리온짐
          </Typography>
        </Box>
        <Box display="flex" py={1} justifyContent="space-between">
          <Typography variant="Body16/regular" color="white">
            유효일자
          </Typography>
          <Typography variant="Body16/semiBold" color="white">
            리온짐
          </Typography>
        </Box>
      </Stack>

      <Stack sx={{ flexDirection: 'row', gap: 1 }}>
        <Button
          size="small"
          variant="outlined"
          onClick={() => navigate(paths.contract.view)}
          sx={{ color: 'white', width: '100%' }}
        >
          계약서 보기
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => navigate(paths.reservation.root)}
          sx={{
            color: 'text.primary',
            backgroundColor: 'white',
            width: '100%'
          }}
        >
          예약하기
        </Button>
      </Stack>
    </Stack>
  );
}
