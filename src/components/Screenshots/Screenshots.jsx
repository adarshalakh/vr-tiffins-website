import "./Screenshots.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import ss1 from "../../assets/screenshots/ss1.jpeg";
import ss2 from "../../assets/screenshots/ss2.jpeg";
import ss3 from "../../assets/screenshots/ss3.jpeg";
import ss4 from "../../assets/screenshots/ss4.jpeg";
import ss8 from "../../assets/screenshots/ss8.jpeg";
import ss5 from "../../assets/screenshots/ss5.jpeg";
import ss6 from "../../assets/screenshots/ss6.jpeg";
import ss7 from "../../assets/screenshots/ss7.jpeg";

const screenshots = [ss1, ss2, ss3, ss4, ss8, ss5, ss6, ss7];

const Screenshots = () => {
  return (
    <section className="screenshots" id="screens">
      <h2>App Screens</h2>

      <p className="section-subtitle">
        Explore the VR Tiffins app experience.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {screenshots.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="screen-card">
              <img src={image} alt={`Screen ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Screenshots;