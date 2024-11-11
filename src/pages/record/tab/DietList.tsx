import { Box, Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import { DateViewFormat } from '../../../utils/formatTime';

type list = {
  date: string;
  type: string;
  content: string;
  imageName: string[];
  imageUrls: string[];
};
interface IDietList {
  dietList: list[];
}
export default function DietList({ dietList }: IDietList) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : 'white';
  return (
    <Stack height={'inherit'} gap={1.5}>
      {dietList.map((diet, key) => (
        <Stack gap={2} pt={3} key={key}>
          <Typography
            children={dayjs(diet.date).format(DateViewFormat)}
            variant={'Body15/light'}
            color={grey600}
          />
          <Box display={'flex'} flexWrap={'wrap'} gap={0.25}>
            {diet.imageUrls.map((img, key) => (
              <img
                key={key}
                style={{
                  width: 118,
                  height: 118,
                  objectFit: 'cover',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
                src={img}
                alt={img}
              />
            ))}
          </Box>
        </Stack>
      ))}
    </Stack>
  );
}
