import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Button, Image, Link } from "@nextui-org/react";
import { toPersianDigits } from "@/helper/dateTimeHelper";

const DoctorSlideShow = () => {
  return (
    <div className="px-2 lg:px-5">
      <div className="!mb-6">
        <Swiper
          className="flex justify-center items-center w-full"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          effect={"fade"}
          // navigation={true}
        //   breakpoints={{
        //     320: {
        //       slidesPerView: 1,
        //     },
        //     768: {
        //       slidesPerView: 2,
        //     },
        //     1024: {
        //       slidesPerView: 3,
        //     },
        //     1440: {
        //       slidesPerView: 4,
        //     },
        //     500: {
        //       slidesPerView: 4,
        //     },
        //   }}
          modules={[Autoplay, Navigation, EffectFade , Pagination]}
        >
          <SwiperSlide className="">
            <Image
              src="https://picsum.photos/1200/350?image=1063"
              className="!h-64 md:!h-80 lg:!h-96 !w-[100vw]"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              src="https://picsum.photos/1200/350?image=1080"
              className="!h-64 md:!h-80 lg:!h-96 !w-[100vw]"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              src="https://picsum.photos/1200/350?image=1057"
              className="!h-64 md:!h-80 lg:!h-96 !w-[100vw]"
            />
          </SwiperSlide>
          <SwiperSlide className="">
            <Image
              src="https://picsum.photos/1200/350?image=1039"
              className="!h-64 md:!h-80 lg:!h-96 !w-[100vw]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default DoctorSlideShow;
