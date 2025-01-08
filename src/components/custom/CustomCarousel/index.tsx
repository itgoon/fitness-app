import { Box, Chip, Stack, Typography, useTheme } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useRef } from 'react';

interface ICarousel {
  list: string[];
  height: number | string;
  content: string;
  imgIndex: number;
  afterChange: (arg: number) => void;
}
const settings = {
  arrows: false,
  dots: false,
  Infinity: true,
  slidesToShow: 1,
  slidesToScroll: 1
};

/**
 * ******************************************************
 * 이미지 뷰어 캐러셀
 * ******************************************************
 */
export default function CustomCarousel({
  list,
  height,
  content,
  imgIndex,
  afterChange
}: ICarousel) {
  const { palette } = useTheme();
  const { white } = palette.common;
  const grey400 = palette.grey[400];
  const totalCount = list.length;
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(imgIndex);
    }
  }, [imgIndex]);
  // TODO: height css고치기
  return (
    <Stack position="relative" gap={2}>
      <Slider {...settings} initialSlide={imgIndex} afterChange={afterChange}>
        {list.map((img, index) => (
          <Box height={height}>
            <img
              key={index}
              alt="img"
              src={img}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        ))}
      </Slider>
      <Chip
        variant="soft"
        color="secondary"
        label={`# ${content}`}
        sx={{ position: 'absolute', bottom: 52, left: 16 }}
      />
      <Typography textAlign="center" color={white} variant="Body15/Bold">
        <span>{imgIndex + 1} </span>
        <span style={{ color: grey400, fontWeight: 400 }}>
          {` / ${totalCount}`}
        </span>
      </Typography>
    </Stack>
  );
}
