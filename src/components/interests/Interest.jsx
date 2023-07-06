import React from "react";
import "./interest.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    name: "Coding",
  },
  {
    name: "Music",
  },
];

const Interest = () => {
  return (
    <section id="interests">
      <h5>My</h5>
      <h2>Interest</h2>

      <Swiper
        className="container interests_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="interest">
              <div className="client_name">
                <h5 className="client_name">{name}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Interest;
