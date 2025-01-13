import { Stack, useTheme } from '@mui/material';
import { useState } from 'react';

export default function DietList() {
  const theme = useTheme();

  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <Stack gap={3}>
      식단 목록입니다.
      {/* {([] as any).map((arr, listKey) => {
        if (arr.imageUrls.length === 0) return null;
        return (
          <Stack key={listKey} gap={2}>
            <Typography
              children={dayjs(arr.date).format(DateViewFormat)}
              variant="Body15/light"
              color={theme.palette.mode === 'light' ? 'grey.600' : 'white'}
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
      })} */}
      {/* {isOpenView && (
        <ImageViewer
          selectedIndex={selectedIndex}
          clickedImg={clickedImg}
          onClose={() => setIsOpenView((prev) => !prev)}
          afterChange={afterChange}
          onDelete={viewerDelete}
        />
      )} */}
    </Stack>
  );
}
