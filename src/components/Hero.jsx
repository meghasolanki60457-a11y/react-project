import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/image/carousel-1.jpg";
import img2 from "../assets/image/carousel-2.jpg";

export default function Hero() {
  return (
    <div className="container-fluid p-0 mb-5 position-relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={true}
      >

        <SwiperSlide>
          <div className="position-relative">
            <img className="img-fluid w-100" src={img1} alt="" />

            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(24,29,56,.7)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <h5 className="text-primary text-uppercase mb-3">
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 text-white">
                      The Best Online Learning Platform
                    </h1>
                    <p className="fs-5 text-white mb-4">
                      Learn from anywhere with best instructors.
                    </p>
                    <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3">
                      Read More
                    </a>
                    <a href="#" className="btn btn-light py-md-3 px-md-5">
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative">
            <img className="img-fluid w-100" src={img2} alt="" />

            <div
              className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: "rgba(24,29,56,.7)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-8">
                    <h5 className="text-primary text-uppercase mb-3">
                      Best Online Courses
                    </h5>
                    <h1 className="display-3 text-white">
                      Get Educated Online From Your Home
                    </h1>
                    <p className="fs-5 text-white mb-4">
                      Start learning today with flexible courses.
                    </p>
                    <a href="#" className="btn btn-primary py-md-3 px-md-5 me-3">
                      Read More
                    </a>
                    <a href="#" className="btn btn-light py-md-3 px-md-5">
                      Join Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}