import { Box, Stack, Typography, useTheme } from '@mui/material';
import { ISign } from './types';

export default function Sign({ placeholder, date, onClick }: ISign) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey400 = palette.grey[400];
  const grey600 = palette.grey[600];
  const blgrey = light ? palette.grey.A200 : grey400;
  return (
    <Stack gap={3}>
      <Typography
        display={'flex'}
        justifyContent={'center'}
        variant={'Body20/semiBold'}
        children={date}
      />

      <Box
        display={'flex'}
        justifyContent={'center'}
        bgcolor={blgrey}
        py={4.62}
        borderRadius={0.5}
        border={`2px solid ${palette.error.darker}`}
        onClick={onClick}
      >
        <Typography
          variant="Body18/regular"
          color={grey600}
          children={placeholder}
        />
      </Box>
    </Stack>
  );
}
