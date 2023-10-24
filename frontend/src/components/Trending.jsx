import React from "react";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Trending = () => {
  return (
    <div>
      <h1 className="text-8xl pb-8">Tendance :</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className="relative">
            <h1 className="absolute text-6xl  top-2 left-2 ">Tee-shirt</h1>
            <img className=" rounded-lg " src="./assets/tshirt3.jpg" alt="" />
            <div className="absolute bottom-6 right-12">
              <button className="button-black hover:button-black">Achat</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <h1 className="absolute text-6xl top-2 left-2 ">Super</h1>
            <img className=" rounded-lg " src="./assets/femme2.jpg" alt="" />
            <div className="absolute bottom-6 right-12">
              <button className="button-black hover:button-black">Achat</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <h1 className="absolute text-6xl  top-2 left-2 ">Super</h1>
            <img className=" rounded-lg " src="./assets/pull1.jpg" alt="" />
            <div className="absolute bottom-6 right-12">
              <button className="button-black hover:button-black">Achat</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <h1 className="absolute text-6xl  top-2 left-2 ">Super</h1>
            <img className=" rounded-lg " src="./assets/homme1.jpg" alt="" />
            <div className="absolute bottom-6 right-12">
              <button className="button-black hover:button-black">Achat</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <h1 className="absolute text-6xl  top-2 left-2 ">Super</h1>
            <img className=" rounded-lg " src="./assets/jeans2.jpg" alt="" />
            <div className="absolute bottom-6 right-12">
              <button className="button-black hover:button-black">Achat</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <h1 className="absolute text-6xl  top-2 left-2 ">Super</h1>
            <img className=" rounded-lg " src="./assets/pull3.jpg" alt="" />
            <div className="absolute bottom-6 right-12">
              <button className="button-black hover:button-black">Achat</button>
            </div>
          </div>
        </SwiperSlide>
        <div className="button-prev-slide absolute z-10 top-[50%] cursor-pointer text-white py-2 px-4 rounded-lg bg-black grid place-content-center hover:button-black">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="button-next-slide absolute z-10 top-[50%] right-0 cursor-pointer text-white py-2 px-4 rounded-lg bg-black grid place-content-center">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </Swiper>
    </div>
  );
};

// const settings = {
//   infinite: true,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 1,
// };
{
  /* <Slider {...settings}>
<div className="relative">
  <img className=" rounded-lg " src="./assets/jeans2.jpg" alt="" />
  <div className="absolute bottom-6 right-12">
  <button className="button-black hover:button-black">Achat</button>
  </div>
</div>
<div className="relative">
  <img src="./assets/pull1.jpg" alt="" />
  <div className="absolute bottom-6 right-12">
  <button className="button-black hover:button-black">Achat</button>
  </div>
</div>

<div className="relative">
  <img src="./assets/pull3.jpg" alt="" />
  <div className="absolute bottom-6 right-12">
  <button className="button-black hover:button-black">Achat</button>
  </div>
</div>

<div className="relative">
  <img src="./assets/pull6.jpg" alt="" />
  <div className="absolute bottom-6 right-12">
  <button className="button-black hover:button-black">Achat</button>
  </div>
</div>

<div className="relative">
  <img src="./assets/tshirt3.jpg" alt="" />
  <div className="absolute bottom-6 right-12">
  <button className="button-black hover:button-black">Achat</button>
  </div>
</div>

<div className="relative">
  <img src="./assets/tshirt6.jpg" alt="" />
  <div className="absolute bottom-6 right-12">
  <button className="button-black hover:button-black">Achat</button>
  </div>
</div>
</Slider> */
}
export default Trending;
