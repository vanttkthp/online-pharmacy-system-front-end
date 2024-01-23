import React from "react";
import { WrapperSlider, WrapperSliderStyle } from "./style";
import ImageComponent from "../../ImageComponent/ImageComponent";
const SliderComponent = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <WrapperSlider>
      <WrapperSliderStyle {...settings}>
        {arrImages.map((image) => {
          return (
            <ImageComponent
              key={image}
              src={image}
              alt="slider"
              width="100%"
              height="500px"
              preview={false}
            />
          );
        })}
      </WrapperSliderStyle>
    </WrapperSlider>
  );
};

export default SliderComponent;
