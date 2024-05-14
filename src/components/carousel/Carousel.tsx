import * as Styled from "../styled";
import Typography from "../typography";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import CP from '..';
import { DummyDataItem } from "@/pages/member/schedule/Schedule";

interface CarouselProps {
  newValueData: DummyDataItem;
  openCarousel: any
}

const Carousel = ({
  newValueData,
  openCarousel
}: CarouselProps) => {
  
  const settings = {
    arrows: false,
    dots: true,
    infinite: false,
    initialSlide: openCarousel,    
  }

  return (
    <CP.Styled.CarouselWrapper>
      <Slider {...settings} >
        {newValueData?.diet && Object.values(newValueData?.diet || {}).map((item, idx) => (
          <CP.Styled.Div key={idx}>
            <CP.Styled.Typography variant="b1">{item.title}</CP.Styled.Typography>
            <img src={`../../public/images/dummy/${item.imgPath}`}/>
          </CP.Styled.Div>
        ))}
      </Slider>
    </CP.Styled.CarouselWrapper>

  );
};

export default Carousel;
