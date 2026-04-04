import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img15 from "../assets/image/testimonial-1.jpg";
import img16 from "../assets/image/testimonial-2.jpg";
import img17 from "../assets/image/testimonial-3.jpg";
import img18 from "../assets/image/testimonial-4.jpg";

export default function Testimonial() {
  return (
    <>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center pt-5">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Students Say!</h1>
          </div>

        <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={3}
  centeredSlides={true}   // 👈 IMPORTANT
  loop={true}
  autoplay={{ delay: 2500 }}
  pagination={{ clickable: true }}
  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    992: { slidesPerView: 3 },
  }}
>
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="testimonial-item text-center ">
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src={img15}
                  style={{ width: "80px", height: "80px" }}
                  alt=""
                />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="testimonial-item text-center">
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src={img16}
                  style={{ width: "80px", height: "80px" }}
                  alt=""
                />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="testimonial-item text-center">
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src={img17}
                  style={{ width: "80px", height: "80px" }}
                  alt=""
                />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="testimonial-item text-center">
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src={img18}
                  style={{ width: "80px", height: "80px" }}
                  alt=""
                />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos.
                  </p>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
}