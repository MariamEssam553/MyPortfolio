import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';
import img1 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.20.18.jpg';
import img2 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.20.24.jpg';
import img3 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.20.25.jpg';
import img4 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.20.27.jpg';
import img5 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.20.28.jpg';
import img6 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.20.29.jpg';
import img7 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.20.30.jpg';
import img8 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.20.31.jpg';
import img9 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.26.12.jpg';
import img10 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.26.49.jpg';
import img11 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.34.16.jpg';
import img12 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.35.02.jpg';
import img13 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.38.06.jpg';
import img14 from '../assets/Photos/WhatsApp Image 2023-06-27 at 19.39.48.jpg';
import img15 from '../assets/Photos/WhatsApp Image 2023-06-274 at 19.20.30.jpg';

const Hobbies = () => {
  const slides = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-screen w-full pt-[50px] bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col items-center w-full h-full">
        <p className=" text-4xl w-min py-2 font-bold inline border-b-4 border-pink-600 ">
          Hobbies
        </p>
        <p className="py-4">Photography, Traveling & Reading</p>
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group bg-gradient-to-r from-[#0a192f]">
          <div
            style={{ backgroundImage: `url('${slides[currentIndex]}')` }}
            className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/20 text-gray-300 shadow-lg shadow-black/20 dark:shadow-black/40 cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/20 text-gray-300 cursor-pointer shadow-lg shadow-black/20 dark:shadow-black/40">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                {/* <RxDotFilled /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
