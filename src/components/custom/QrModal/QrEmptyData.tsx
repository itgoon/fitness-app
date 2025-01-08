import { Stack, Typography } from '@mui/material';

export default function QrEmptyData() {
  return (
    <Stack height="100%" justifyContent="space-between" py={5} px={2.5}>
      <Stack gap={1}>
        <Typography
          variant="Body24/semiBold"
          color="white"
          children="연동된 헬스장이 없습니다."
        />

        <Typography
          variant="Body16/light"
          lineHeight="24px"
          paddingRight={3}
          color="white"
          children="헬스장과 연동을 진행하시면 앱으로 회원권을 사용하실 수 있습니다."
        />
      </Stack>

      <Stack>
        <Typography
          variant="Body14/light"
          children="계정 연동이 안된다면 고객센터로 문의해주세요."
          color="white"
        />
        <Typography
          variant="Body14/light"
          children="평일 10:00 ~ 19:00 / 문의 032-123-4567"
          color="white"
        />
      </Stack>
    </Stack>
  );
}
