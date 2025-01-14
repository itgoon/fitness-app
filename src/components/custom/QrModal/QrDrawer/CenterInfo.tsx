import { Stack, Typography } from '@mui/material';

export default function CenterInfo() {
  return (
    <Stack>
      <Typography variant="Body24/bold" sx={{ mb: 3 }}>
        센터 정보
      </Typography>
      <Stack sx={{ gap: 0.5 }}>
        <Stack sx={{ gap: 1, py: 1 }}>
          <Typography variant="Body16/regular" color="grey.600">
            센터명
          </Typography>
          <Typography variant="Body16/semiBold">리온짐</Typography>
        </Stack>
        <Stack sx={{ gap: 1, py: 1 }}>
          <Typography variant="Body16/regular" color="grey.600">
            대표
          </Typography>
          <Typography variant="Body16/semiBold">홍길동</Typography>
        </Stack>
        <Stack sx={{ gap: 1, py: 1 }}>
          <Typography variant="Body16/regular" color="grey.600">
            전화번호
          </Typography>
          <Typography variant="Body16/semiBold">032-123-1342</Typography>
        </Stack>
        <Stack sx={{ gap: 1, py: 1 }}>
          <Typography variant="Body16/regular" color="grey.600">
            주소
          </Typography>
          <Typography variant="Body16/semiBold">
            부천시 원미구 신흥로 256 1층
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
