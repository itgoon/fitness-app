import { Box, Typography, useTheme } from '@mui/material';

interface ContractTableItemProps {
  title: string;
  content: string;
  isLast?: boolean;
}

export default function ContractTableItem({
  title,
  content,
  isLast = false
}: ContractTableItemProps) {
  const theme = useTheme();

  const light = theme.palette.mode === 'light';

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderBottom: isLast ? 'none' : '1px solid',
        borderColor: isLast ? 'none' : 'grey.200'
      }}
    >
      <Box
        sx={{
          width: 90,
          height: 48,
          textAlign: 'center',
          backgroundColor: 'grey.800',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography
          component="p"
          variant="Body14/semiBold"
          textAlign="center"
          color={light ? 'white' : 'black'}
        >
          {title}
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          padding: 1.5
        }}
      >
        <Typography
          component="p"
          variant="Body16/regular"
          color={light ? 'black' : 'white'}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
