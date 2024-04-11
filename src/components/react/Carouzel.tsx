"use client";

import Image from "next/image";
import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import img1 from "../../../public/x1.jpg";
import img2 from "../../../public/x2.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    customPaging: function () {
      return (
        <div
          className={`z-10 flex h-3 w-3 items-center justify-center rounded-full bg-white/30 transition-colors hover:bg-white/60`}
        ></div>
      );
    },
  };

  return (
    <>
      <Slider {...settings}>
        <div className="relative h-52 w-52">
          <Image
            src={img1}
            alt="..."
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative h-52 w-52">
          <Image
            src={img1}
            alt="..."
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative h-52 w-52">
          <Image
            src={img1}
            alt="..."
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative h-52 w-52">
          <Image
            src={img1}
            alt="..."
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative h-52 w-52">
          <Image
            src={img1}
            alt="..."
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="relative h-52 w-52">
          <Image
            src={img2}
            alt="..."
            fill
            className="object-cover object-center"
          />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
