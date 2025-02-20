import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";
const header = () => {
  return (
    <div className=" h-screen w-full">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div
            className="h-screen bg-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/img06.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
                <p className="text-7xl text-white text-center"> TOP AUTODEZ CMG</p>
                <p className="text-2xl font-light text-white ">
                Piese de calitate superioara
                </p>
                {/* <button
                  type="button"
                  className="text-white  bg-amber-600 hover:bg-amber-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
                >
                  CONTACT US
                </button> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/parc.jpeg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
              <p className="text-7xl text-white text-center "> TOP AUTODEZ CMG</p>
                <p className="text-2xl font-light text-white ">
                Piese de calitate superioara
                </p>
               
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="h-screen bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: `url(/carPart.jpg)`,
            }}
          >
            <div className="h-screen bg-black bg-opacity-10 ">
              <div className="h-screen flex flex-col justify-center items-center space-y-6">
              <p className="text-7xl text-white text-center "> TOP AUTODEZ CMG</p>
                {/* <p className="text-2xl font-light text-white ">
                Piese de calitate superioara
                </p> */}
                
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default header;
