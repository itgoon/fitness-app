import { Box, Checkbox, Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import Icon from '../../../components/Icon';
import { DateViewFormat } from '../../../utils/formatTime';
import { IRecordList, TdietRecordList } from '../types';
import { useState } from 'react';
import ImageViewer from './ImageViewer';

export default function RecordList({
  arrList,
  isEdit,
  selectedIndex,
  onChange,
  onClickImage,
  setSelectedIndex,
  onDelete
}: IRecordList) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : 'white';

  const [isOpenView, setIsOpenView] = useState(false);
  const [clickedImg, setClickedImg] = useState<TdietRecordList | undefined>(
    undefined
  );

  const onHandleViewr = (listIndex, imageIndex, arr) => {
    onClickImage(listIndex, imageIndex);
    setClickedImg(arr);
    setIsOpenView((prev) => !prev);
  };

  return (
    <>
      {arrList.map((arr, listKey) => {
        if (arr.imageUrls.length < 0) return null;
        return (
          <Stack key={listKey} gap={2}>
            <Typography
              children={dayjs(arr.date).format(DateViewFormat)}
              variant={'Body15/light'}
              color={grey600}
            />
            <Box display={'flex'} flexWrap={'wrap'} gap={0.25}>
              {arr.imageUrls.map((img, imageKey) => (
                <Box position={'relative'} key={imageKey}>
                  <img
                    style={{
                      width: 118,
                      height: 118,
                      objectFit: 'cover',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'
                    }}
                    src={img}
                    alt={img}
                    onClick={() => onHandleViewr(listKey, imageKey, arr)}
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
                      onClick={() => onChange(listKey, imageKey)}
                    >
                      <Checkbox
                        color={'success'}
                        checked={selectedIndex.some(
                          ([fIndex, sIndex]) =>
                            fIndex === listKey && sIndex === imageKey
                        )}
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
      {isOpenView && (
        <ImageViewer
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          clickedImg={clickedImg}
          onClose={() => setIsOpenView((prev) => !prev)}
          onDelete={onDelete}
        />
      )}
    </>
  );
}
