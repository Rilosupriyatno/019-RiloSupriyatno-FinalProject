import React from "react";
import "./award.css";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    name: "Microsoft Office Specialist",
  },
  {
    name: "Data Security",
  },
];

const Award = () => {
  return (
    <section id="awards">
      <h5>My</h5>
      <h2>Award</h2>

      <Swiper
        className="container awards_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="award">
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

export default Award;
