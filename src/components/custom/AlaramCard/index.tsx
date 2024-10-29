import { Stack, Typography, useTheme, Box } from '@mui/material';
import { IAlaramCard } from './types';
import Button from '../../Button';

export default function AlaramCard({
  isEmpty = true,
  title,
  dataList,
  onClick,
  onClickMsg,
  margin
}: IAlaramCard) {
  const theme = useTheme();
  const grey500 = theme.palette.grey[500];
  const grey600 = theme.palette.grey[600];
  const blgrey = theme.palette.grey.A200;
  return (
    <>
      {isEmpty ? (
        <Box
          display={'flex'}
          justifyContent={'center'}
          bgcolor={blgrey}
          py={1.5}
          margin={margin ? margin : '12px 20px 32px'}
          borderRadius={1}
        >
          <Typography
            variant="Body16/regular"
            color={grey500}
            children={title}
          />
        </Box>
      ) : (
        <Stack
          borderRadius={2}
          padding={'24px 20px'}
          gap={3}
          margin={margin ? margin : '12px 20px 24px'}
          bgcolor={blgrey}
        >
          {title && <Typography variant="Body18/bold" children={title} />}

          <Stack padding={0} gap={1}>
            {dataList?.map((data, key) => (
              <Box key={key} display={'flex'} justifyContent={'space-between'}>
                <Typography
                  variant={'Body14/regular'}
                  color={grey600}
                  children={data.label}
                />
                <Typography variant={'Body15/semiBold'} children={data.value} />
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
        </Stack>
      )}
    </>
  );
}
