import { Stack, Typography, useTheme, Box } from '@mui/material';
import { IAlaramCard } from './types';
import Button from '../../Button';
import EmptyCard from '../customCard/EmptyCard';

export default function AlaramCard({
  isEmpty = true,
  title,
  dataList,
  onClick,
  onClickMsg,
  margin
}: IAlaramCard) {
  const theme = useTheme();
  const { palette } = theme;
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : 'white';
  const grey900 = light ? palette.grey[900] : 'white';

  return (
    <EmptyCard
      borderRadius={2}
      padding={'24px 20px'}
      gap={3}
      margin={'12px 20px 24px'}
      direction={'column'}
    >
      {title && (
        <Typography variant="Body18/bold" children={title} color={grey900} />
      )}

      <Stack padding={0} gap={1}>
        {dataList?.map((data, key) => (
          <Box key={key} display={'flex'} justifyContent={'space-between'}>
            <Typography
              variant={'Body14/regular'}
              color={grey600}
              children={data.label}
            />
            <Typography
              variant={'Body15/semiBold'}
              children={data.value}
              color={grey900}
            />
          </Box>
        ))}
      </Stack>
      {onClick && (
        <Button
          variant={'contained'}
          color={'primary'}
          children={onClickMsg}
          onClick={onClick}
        />
      )}
    </EmptyCard>
  );
}
