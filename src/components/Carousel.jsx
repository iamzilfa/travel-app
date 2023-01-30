import React, { useState } from "react";
import { carouselData } from "./CarouselData";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = carouselData.length;
//   console.log(length)
  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide +1)
  }

  const previousSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1)
  }
  
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill onClick={previousSlide} className="absolute top-[50%] txt-3xl text-white cursor-pointer left-8" />
      <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] txt-3xl text-white cursor-pointer right-8" />
      {carouselData.map((e, i) => (
        <div key={i} className={i === slide ? `opacity-100` : `opacity-0`}>
          {i === slide && (
            <img className="w-full rounded-md" src={e.url} alt="/" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
