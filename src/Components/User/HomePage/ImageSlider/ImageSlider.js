import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.style.css";

import { ImageSliderFiles } from "../ImageSliderFiles/ImageSliderFiles";
export const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <Slider {...settings} className="imageSlider">
      <ImageSliderFiles
        url="/images/slider/slider1.jpg"
        link="#"
        title="slide1"
      />
      <ImageSliderFiles
        url="/images/slider/slider2.jpg"
        link="#"
        title="slide2"
      />
      <ImageSliderFiles
        url="/images/slider/slider3.jpg"
        link="#"
        title="slide3"
      />
      <ImageSliderFiles
        url="/images/slider/slider4.jpg"
        link="#"
        title="slide4"
      />
    </Slider>
  );
};
