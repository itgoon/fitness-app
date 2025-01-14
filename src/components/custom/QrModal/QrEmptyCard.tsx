import { Stack, Typography } from '@mui/material';

export default function QrEmptyCard() {
  return (
    <Stack
      sx={{
        height: '100%',
        justifyContent: 'space-between',
        background: `
        radial-gradient(circle at 50% 50%, rgba(17, 85, 243, 0.3) 0%, rgba(0, 65, 219, 0.9) 100%),
        conic-gradient(from 37deg at 50% 50%, rgba(0, 30, 191, 0.7) 0deg, rgba(199, 205, 252, 0.1) 360deg),
        conic-gradient(from 217deg at 50% 50%, rgba(0, 30, 191, 0.5) 0deg, rgba(199, 205, 252, 0.3) 360deg)
      `,
        backgroundColor: '#001EBF',
        px: 2.5,
        py: 5,
        borderRadius: 1,
        boxShadow: 12
      }}
    >
      <Stack gap={1}>
        <Typography variant="Body24/semiBold" color="white">
          연동된 헬스장이 없습니다.
        </Typography>

        <Typography
          variant="Body16/light"
          lineHeight="24px"
          paddingRight={3}
          color="white"
        >
          헬스장과 연동을 진행하시면 앱으로 회원권을 사용하실 수 있습니다.
        </Typography>
      </Stack>

      <Stack>
        <Typography variant="Body14/light" color="white">
          계정 연동이 안된다면 고객센터로 문의해주세요.
        </Typography>
        <Typography variant="Body14/light" color="white">
          평일 10:00 ~ 19:00 / 문의 032-123-4567
        </Typography>
      </Stack>
    </Stack>
  );
}
