import Slider from "react-slick";
import styled from "styled-components";

export const WrapperSliderStyle = styled(Slider)`
  & .slick-arrow.slick-prev {
    left: 12px;
    top: 50%;
    z-index: 10;
    &::before {
      font-size: 40px;
      color: #fff;
    }
  }
  & .slick-arrow.slick-next {
    right: 28px;
    top: 50%;
    z-index: 10;
    &::before {
      font-size: 40px;
      color: #fff;
    }
  }
  & .slick-dots {
    z-index: 10;
    bottom: 20px !important;
    li {
      button {
        &::before {
          color: #F8EDFF;
        }
      }
    }
    li.active {
      button {
        &::before {
          color: #fff;
        }
      }
    }
  }
`;
export const WrapperSlider = styled.div`
  padding: 20px 0px;
  border-radius:1500px;
`;
