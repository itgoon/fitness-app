import { Box, Checkbox, Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import { DateViewFormat } from '../../../utils/formatTime';
import Icon from '../../../components/Icon';

type list = {
  date: string;
  type: string;
  content: string;
  imageName: string[];
  imageUrls: string[];
};
interface IDietList {
  dietList: list[];
  isEdit: boolean;
  onChange: (fr: number, sec: number) => void;
  selectedIndex: number[][];
}
export default function DietList({
  dietList,
  isEdit,
  onChange,
  selectedIndex
}: IDietList) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : 'white';
  return (
    <Stack height={'inherit'} gap={1.5}>
      {dietList.map((diet, listKey) => {
        if (diet.imageUrls.length < 0) return;
        return (
          <Stack gap={2} pt={3} key={listKey}>
            <Typography
              children={dayjs(diet.date).format(DateViewFormat)}
              variant={'Body15/light'}
              color={grey600}
            />
            <Box display={'flex'} flexWrap={'wrap'} gap={0.25}>
              {diet.imageUrls.map((img, imageKey) => (
                <Box position={'relative'}>
                  <img
                    key={imageKey}
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
                  {isEdit && (
                    <Box
                      width={118}
                      height={118}
                      display={'flex'}
                      justifyContent={'end'}
                      alignItems={'end'}
                      position={'absolute'}
                      top={0}
                      left={0}
                      bgcolor={'#0000004D'}
                    >
                      <Checkbox
                        color={'success'}
                        checked={selectedIndex.some(
                          ([fIndex, sIndex]) =>
                            fIndex === listKey && sIndex === imageKey
                        )}
                        onChange={() => onChange(listKey, imageKey)}
                        checkedIcon={
                          <Icon name={'GalleryCheckSvg'} size={20} />
                        }
                        icon={<Icon name={'GalleryCheckSvg'} size={20} />}
                        sx={{ mr: 0.63, mb: 0.63 }}
                      />
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          </Stack>
        );
      })}
    </Stack>
  );
}
