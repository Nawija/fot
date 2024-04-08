"use client";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import img3 from "../../../public/himg.jpg";
import img1 from "../../../public/x1.jpg";
import img2 from "../../../public/x2.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 300,
    centerPadding:"200px",
    autoplaySpeed: 3200,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: function () {
      return (
        <div
          className={`-mt-12 h-3 w-3 rounded-full bg-white/30 transition-colors hover:bg-white/60`}
        ></div>
      );
    },
  };

  return (
    <Slider {...settings}>
      <div className="relative h-[600px]">
        <Image
          src={img1}
          alt="..."
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative h-[600px]">
        <Image
          src={img2}
          alt="..."
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="relative h-[600px]">
        <Image
          src={img3}
          alt="..."
          fill
          className="object-cover object-center"
        />
      </div>
    </Slider>
  );
};

export default Carousel;
