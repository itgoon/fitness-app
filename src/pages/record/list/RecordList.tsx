import { Box, Checkbox, Stack, Typography, useTheme } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';
import Icon from '../../../components/Icon';
import { DateViewFormat } from '../../../utils/formatTime';
import { IRecordList, TdietRecordList } from '../types';
import ImageViewer from '../tab/ImageViewer';

export default function RecordList({
  arrList,
  isEdit,
  selectedIndex,
  onChange,
  onClickImage,
  onDelete,
  afterChange
}: IRecordList) {
  const { palette } = useTheme();
  const light = palette.mode === 'light';
  const grey600 = light ? palette.grey[600] : 'white';

  const [isOpenView, setIsOpenView] = useState(false);
  const [clickedImg, setClickedImg] = useState<TdietRecordList>({
    date: '',
    type: '',
    content: '',
    imageName: [],
    imageUrls: []
  });

  const onHandleViewr = (listIndex: number, imageIndex: number, arr: any) => {
    onClickImage(listIndex, imageIndex);
    setClickedImg(arr);
    setIsOpenView(true);
  };

  const viewerDelete = () => {
    onDelete();

    const updatedData = clickedImg?.imageUrls.filter(
      (_, imgIndex) => !selectedIndex.some(([, sIndex]) => sIndex === imgIndex)
    );
    setClickedImg((prev) => ({
      ...prev,
      imageUrls: updatedData
    }));
  };

  return (
    <Stack gap={3}>
      {arrList.map((arr, listKey) => {
        if (arr.imageUrls.length === 0) return null;
        return (
          <Stack key={listKey} gap={2}>
            <Typography
              children={dayjs(arr.date).format(DateViewFormat)}
              variant="Body15/light"
              color={grey600}
            />
            <Box display="flex" flexWrap="wrap" gap={0.25}>
              {arr.imageUrls.map((img, imageKey) => (
                <Box position="relative" key={imageKey} width="32.9%">
                  <img
                    style={{
                      aspectRatio: '1/1',
                      objectFit: 'cover',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat'
                    }}
                    src={img}
                    alt={img}
                  />
                  {isEdit && (
                    <Box
                      width="100%"
                      height="100%"
                      display="flex"
                      justifyContent="end"
                      alignItems="end"
                      position="absolute"
                      top={0}
                      left={0}
                      bgcolor="#0000004D"
                      onClick={() => onChange(listKey, imageKey)}
                    >
                      <Checkbox
                        color="success"
                        checked={selectedIndex.some(
                          ([fIndex, sIndex]) =>
                            fIndex === listKey && sIndex === imageKey
                        )}
                        checkedIcon={
                          <Icon name="CheckCircleOutlineRounded" size={20} />
                        }
                        icon={<Icon name="GalleryCheckSvg" size={20} />}
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
          clickedImg={clickedImg}
          onClose={() => setIsOpenView((prev) => !prev)}
          afterChange={afterChange}
          onDelete={viewerDelete}
        />
      )}
    </Stack>
  );
}
