"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import img1 from "../../../public/himg.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function () {
      return (
        <div
          className={`-mt-12 h-4 w-4 rounded-full bg-white/30 hover:bg-white/60 transition-colors`}
        ></div>
      );
    },
  };

  return (
    <Slider {...settings}>
      <div className="relative h-[600px] w-full px-32">
        <Image
          src={img1}
          alt="..."
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative h-[600px] w-full">
        <Image
          src={img1}
          alt="..."
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative h-[600px] w-full">
        <Image
          src={img1}
          alt="..."
          fill
          className="object-cover object-center"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
