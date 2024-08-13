import Typography from "../typography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box } from "@mui/material";

interface CarouselProps {
  newValueData: any;
  openCarousel: any;
}

const Carousel = ({ newValueData, openCarousel }: CarouselProps) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    initialSlide: openCarousel
  };

  return (
    <Box
      sx={{
        padding: "0px",
        borderRadius: "4px",
        height: "440px",
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        {newValueData?.diet &&
          Object.values(newValueData?.diet || {}).map((item: any, idx) => (
            <Box key={idx}>
              <Typography variant="b1">{""}</Typography>
              <img
                src={
                  item.imgPath
                    ? `../../public/images/dummy/${item.imgPath}`
                    : ""
                }
              />
            </Box>
          ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
