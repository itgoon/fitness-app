import { Box, Typography, useTheme } from '@mui/material';

interface SignProps {
  onClick: () => void;
}

export default function SignCanvas({ onClick }: SignProps) {
  const theme = useTheme();

  const light = theme.palette.mode === 'light';

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={light ? 'grey.200' : 'grey.400'}
      height={100}
      borderRadius={0.5}
      onClick={onClick}
    >
      <Typography
        variant="Body18/regular"
        color={light ? 'grey.600' : 'white'}
        children="클릭해서 서명하기"
      />
    </Box>
  );
}
