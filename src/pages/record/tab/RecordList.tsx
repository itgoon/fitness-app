import { Box, Checkbox, Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import Icon from '../../../components/Icon';
import { DateViewFormat } from '../../../utils/formatTime';
import { IRecordList } from '../types';

export default function RecordList({
  arrList,
  isEdit,
  onChange,
  selectedIndex
}: IRecordList) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : 'white';
  return (
    <>
      {arrList.map((arr, listKey) => {
        if (arr.imageUrls.length < 0) return;
        return (
          <Stack key={listKey} gap={2}>
            <Typography
              children={dayjs(arr.date).format(DateViewFormat)}
              variant={'Body15/light'}
              color={grey600}
            />
            <Box display={'flex'} flexWrap={'wrap'} gap={0.25}>
              {arr.imageUrls.map((img, imageKey) => (
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
    </>
  );
}
