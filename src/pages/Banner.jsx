import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
   <Swiper
  modules={[ Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 4000 }}
  loop={true}
  className="heroSwiper"
>
  {/* Slide 1 */}
  <SwiperSlide>
    <div
      className="slide"
      style={{
        backgroundImage: "url('assets/image/bannerimg1.jpeg')",
      }}
    >
      <div className="overlay">
        <div className="banner-content">
          <span className="subtitle">Welcome To</span>
          <h1>TECHNO HIGH SCHOOL</h1>
          <p>
            Empowering students with knowledge, discipline, and excellence for
            a brighter future.
          </p>

          <div className="banner-buttons">
            <a href="/admission" className="btn-primary">
              Apply Now
            </a>
            <a href="/about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 2 */}
  <SwiperSlide>
    <div
      className="slide"
      style={{
        backgroundImage: "url('assets/image/bannerimg2.jpeg')",
      }}
    >
      <div className="overlay">
        <div className="banner-content">
          <span className="subtitle">Admissions Open</span>
          <h1>SHAPE YOUR FUTURE WITH US</h1>
          <p>
            Modern classrooms, experienced faculty, and a nurturing learning
            environment for every student.
          </p>

          <div className="banner-buttons">
            <a href="/admission" className="btn-primary">
              Enroll Today
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>

  {/* Slide 3 */}
  <SwiperSlide>
    <div
      className="slide"
      style={{
        backgroundImage: "url('assets/image/bannerimg3.jpeg')",
      }}
    >
      <div className="overlay">
        <div className="banner-content">
          <span className="subtitle">Excellence In Education</span>
          <h1>LEARN • GROW • SUCCEED</h1>
          <p>
            Building confident leaders through academics, sports, cultural
            activities, and character development.
          </p>

          <div className="banner-buttons">
            <a href="/facility" className="btn-primary">
              Explore Facilities
            </a>
            <a href="/about" className="btn-secondary">
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
  );
};

export default Banner;